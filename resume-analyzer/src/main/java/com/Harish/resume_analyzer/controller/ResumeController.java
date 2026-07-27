package com.Harish.resume_analyzer.controller;

import com.Harish.resume_analyzer.entity.Resume;
import com.Harish.resume_analyzer.service.ResumeAnalysisService;
import com.Harish.resume_analyzer.service.ResumeService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Map;

@RestController
@RequestMapping("/api/resume")
@CrossOrigin("*")
public class ResumeController {

    private final ResumeService resumeService;
    private final ResumeAnalysisService resumeAnalysisService;

    public ResumeController(
            ResumeService resumeService,
            ResumeAnalysisService resumeAnalysisService
    ) {
        this.resumeService = resumeService;
        this.resumeAnalysisService = resumeAnalysisService;
    }

    @PostMapping("/upload")
    public ResponseEntity<?> uploadResume(
            @RequestParam("file") MultipartFile file
    ) {

        try {

            System.out.println("========== RESUME UPLOAD START ==========");
            System.out.println("File Name : " + file.getOriginalFilename());
            System.out.println("File Type : " + file.getContentType());
            System.out.println("File Size : " + file.getSize());

            // Extract text from PDF
            String extractedText = resumeService.extractText(file);

            if (extractedText == null || extractedText.isBlank()) {
                throw new RuntimeException("Unable to extract text from PDF.");
            }

            System.out.println("PDF TEXT EXTRACTION SUCCESS");

            // Create Resume object
            Resume resume = new Resume();

            resume.setFileName(file.getOriginalFilename());
            resume.setExtractedText(extractedText);

            // Analyze Resume
            resume = resumeAnalysisService.analyzeResume(resume);

            System.out.println("Resume Analysis Completed");
            System.out.println("ATS Score : " + resume.getAtsScore());

            System.out.println("========== RESUME UPLOAD END ==========");

            return ResponseEntity.ok(

                    Map.of(

                            "fileName", resume.getFileName(),

                            "atsScore", resume.getAtsScore(),

                            "matchedSkills", resume.getMatchedSkills(),

                            "missingSkills", resume.getMissingSkills(),

                            "suggestions", resume.getSuggestions(),

                            "interviewQuestions", resume.getInterviewQuestions()

                    )

            );

        } catch (Exception e) {

            e.printStackTrace();

            return ResponseEntity.badRequest().body(

                    Map.of(
                            "error",
                            e.getMessage()
                    )

            );

        }

    }

}
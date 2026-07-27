package com.Harish.resume_analyzer.service;

import com.Harish.resume_analyzer.entity.Resume;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class AIAnalysisService {

    private static final List<String> SKILLS = Arrays.asList(
            "Java",
            "Spring Boot",
            "Spring",
            "React",
            "React.js",
            "HTML",
            "CSS",
            "JavaScript",
            "SQL",
            "MySQL",
            "REST API",
            "REST",
            "Git",
            "GitHub",
            "Hibernate",
            "JPA",
            "Maven",
            "OOP"
    );

    public Resume analyzeResume(Resume resume) {

        String text = "";

        if (resume.getExtractedText() != null) {
            text = resume.getExtractedText().toLowerCase();
        }

        List<String> matchedSkills = new ArrayList<>();
        List<String> missingSkills = new ArrayList<>();

        for (String skill : SKILLS) {

            if (text.contains(skill.toLowerCase())) {
                matchedSkills.add(skill);
            } else {
                missingSkills.add(skill);
            }
        }

        int atsScore = (matchedSkills.size() * 100) / SKILLS.size();

        StringBuilder report = new StringBuilder();

        report.append("=====================================\n");
        report.append("        AI RESUME ANALYSIS REPORT\n");
        report.append("=====================================\n\n");

        report.append("ATS Score : ").append(atsScore).append("%\n\n");

        report.append("Matched Skills:\n");
        if (matchedSkills.isEmpty()) {
            report.append("- None\n");
        } else {
            matchedSkills.forEach(skill -> report.append("• ").append(skill).append("\n"));
        }

        report.append("\nMissing Skills:\n");
        if (missingSkills.isEmpty()) {
            report.append("- None\n");
        } else {
            missingSkills.forEach(skill -> report.append("• ").append(skill).append("\n"));
        }

        report.append("\nSuggestions:\n");
        report.append("1. Add missing technical skills.\n");
        report.append("2. Include more real-world projects.\n");
        report.append("3. Quantify achievements using numbers.\n");
        report.append("4. Improve ATS keywords.\n");
        report.append("5. Keep the resume to one page.\n");

        report.append("\nTechnical Interview Questions:\n");
        report.append("1. Explain OOP concepts in Java.\n");
        report.append("2. Difference between Spring and Spring Boot?\n");
        report.append("3. Explain REST APIs.\n");
        report.append("4. What are SQL JOINS?\n");
        report.append("5. Explain JPA and Hibernate.\n");

        report.append("\nHR Interview Questions:\n");
        report.append("1. Tell me about yourself.\n");
        report.append("2. Why should we hire you?\n");
        report.append("3. Describe one challenging project.\n");
        report.append("4. What are your strengths?\n");
        report.append("5. Where do you see yourself in 5 years?\n");

        resume.setSuggestions(report.toString());

        return resume;
    }
}
package com.Harish.resume_analyzer.service;

import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Service
public class ResumeService {


    public String extractText(MultipartFile file) throws IOException {

        if (file.isEmpty()) {
            throw new RuntimeException("File is empty");
        }

        String fileName = file.getOriginalFilename();

        if (fileName == null || !fileName.endsWith(".pdf")) {
            throw new RuntimeException("Only PDF files are allowed");
        }


        PDDocument document = PDDocument.load(file.getInputStream());

        PDFTextStripper pdfStripper = new PDFTextStripper();

        String text = pdfStripper.getText(document);

        document.close();


        return text;
    }

}
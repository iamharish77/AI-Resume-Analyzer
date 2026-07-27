package com.Harish.resume_analyzer.parser;

import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Component
public class PdfParser {

    public String extractText(MultipartFile file) {

        try (PDDocument document = PDDocument.load(file.getInputStream())) {

            PDFTextStripper pdfTextStripper = new PDFTextStripper();

            return pdfTextStripper.getText(document);

        } catch (IOException e) {

            throw new RuntimeException("Error while reading PDF file.", e);

        }
    }
}
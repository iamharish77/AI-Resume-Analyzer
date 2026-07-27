package com.Harish.resume_analyzer.service;

import com.Harish.resume_analyzer.parser.PdfParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;


@Service
public class ResumeParserService {


    @Autowired
    private PdfParser pdfParser;


    public String extractText(MultipartFile file) {

        return pdfParser.extractText(file);

    }

}
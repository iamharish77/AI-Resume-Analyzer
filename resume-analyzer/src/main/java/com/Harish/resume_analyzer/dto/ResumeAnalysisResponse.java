package com.Harish.resume_analyzer.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ResumeAnalysisResponse {

    private int atsScore;

    private List<String> skills;

    private List<String> suggestions;

    private List<String> interviewQuestions;
}
package com.Harish.resume_analyzer.service;

import com.Harish.resume_analyzer.entity.Resume;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class ResumeAnalysisService {

    private static final List<String> REQUIRED_SKILLS = Arrays.asList(
            "Java",
            "Spring Boot",
            "Spring",
            "React",
            "HTML",
            "CSS",
            "JavaScript",
            "SQL",
            "MySQL",
            "REST API",
            "Git",
            "Hibernate",
            "JPA",
            "Maven",
            "OOP"
    );

    public Resume analyzeResume(Resume resume) {

        String text = resume.getExtractedText() == null ?
                "" : resume.getExtractedText().toLowerCase();

        List<String> matched = new ArrayList<>();
        List<String> missing = new ArrayList<>();

        for (String skill : REQUIRED_SKILLS) {

            if (text.contains(skill.toLowerCase())) {
                matched.add(skill);
            } else {
                missing.add(skill);
            }
        }

        int atsScore = (matched.size() * 100) / REQUIRED_SKILLS.size();

        resume.setAtsScore(atsScore);

        resume.setMatchedSkills(
                String.join(", ", matched)
        );

        resume.setMissingSkills(
                String.join(", ", missing)
        );

        resume.setSuggestions("""
                • Add missing technical skills.
                • Add more project achievements.
                • Improve ATS keywords.
                • Mention measurable results.
                • Keep resume within one page.
                """);

        resume.setInterviewQuestions("""
                1. Explain OOP concepts.
                2. Difference between Spring and Spring Boot.
                3. Explain REST API.
                4. Explain SQL Joins.
                5. Explain Hibernate.
                """);

        return resume;
    }

}
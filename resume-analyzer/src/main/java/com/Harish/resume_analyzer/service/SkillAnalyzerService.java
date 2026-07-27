package com.Harish.resume_analyzer.service;

import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class SkillAnalyzerService {

    private final List<String> requiredSkills = Arrays.asList(
            "Java",
            "Spring Boot",
            "React.js",
            "SQL",
            "MySQL",
            "Git",
            "GitHub",
            "REST API",
            "AWS",
            "Docker",
            "Kubernetes"
    );


    public Map<String,String> analyzeSkills(String resumeText){

        String text = resumeText.toLowerCase();

        List<String> matched = new ArrayList<>();
        List<String> missing = new ArrayList<>();


        for(String skill : requiredSkills){

            if(text.contains(skill.toLowerCase())){
                matched.add(skill);
            }
            else{
                missing.add(skill);
            }

        }


        Map<String,String> result = new HashMap<>();

        result.put(
                "matchedSkills",
                String.join(", ",matched)
        );

        result.put(
                "missingSkills",
                String.join(", ",missing)
        );


        return result;
    }


}
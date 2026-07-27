package com.Harish.resume_analyzer.dto;


import java.util.List;


public class InterviewResponse {


    private int score;

    private List<String> strengths;

    private List<String> improvements;

    private String feedback;



    public InterviewResponse(
            int score,
            List<String> strengths,
            List<String> improvements,
            String feedback
    ) {

        this.score = score;
        this.strengths = strengths;
        this.improvements = improvements;
        this.feedback = feedback;

    }



    public int getScore() {
        return score;
    }


    public List<String> getStrengths() {
        return strengths;
    }


    public List<String> getImprovements() {
        return improvements;
    }


    public String getFeedback() {
        return feedback;
    }

}
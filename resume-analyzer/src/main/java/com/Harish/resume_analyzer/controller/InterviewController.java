package com.Harish.resume_analyzer.controller;


import com.Harish.resume_analyzer.dto.InterviewRequest;
import com.Harish.resume_analyzer.dto.InterviewResponse;
import com.Harish.resume_analyzer.service.InterviewService;

import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/interview")
@CrossOrigin
public class InterviewController {


    private final InterviewService interviewService;


    public InterviewController(
            InterviewService interviewService
    ){

        this.interviewService = interviewService;

    }



    @PostMapping("/evaluate")
    public InterviewResponse evaluateAnswer(
            @RequestBody InterviewRequest request
    ){

        return interviewService.evaluateAnswer(
                request.getQuestion(),
                request.getAnswer()
        );

    }

}
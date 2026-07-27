package com.Harish.resume_analyzer.controller;

import com.Harish.resume_analyzer.entity.InterviewQuestion;
import com.Harish.resume_analyzer.service.InterviewQuestionService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/interview")
@CrossOrigin
public class InterviewQuestionController {


    private final InterviewQuestionService service;


    public InterviewQuestionController(InterviewQuestionService service) {
        this.service = service;
    }


    // Get all questions
    @GetMapping("/questions")
    public List<InterviewQuestion> getQuestions(){
        return service.getAllQuestions();
    }


    // Get by id
    @GetMapping("/questions/{id}")
    public InterviewQuestion getQuestion(@PathVariable Long id){
        return service.getQuestionById(id);
    }


    // Add question
    @PostMapping("/questions")
    public InterviewQuestion addQuestion(
            @RequestBody InterviewQuestion question){

        return service.saveQuestion(question);
    }


    // Delete question
    @DeleteMapping("/questions/{id}")
    public String deleteQuestion(@PathVariable Long id){

        service.deleteQuestion(id);

        return "Question deleted successfully";
    }
}
package com.Harish.resume_analyzer.service;

import com.Harish.resume_analyzer.entity.InterviewQuestion;
import com.Harish.resume_analyzer.repository.InterviewQuestionRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InterviewQuestionService {

    private final InterviewQuestionRepository repository;

    public InterviewQuestionService(InterviewQuestionRepository repository) {
        this.repository = repository;
    }


    // Get all questions
    public List<InterviewQuestion> getAllQuestions() {
        return repository.findAll();
    }


    // Get question by id
    public InterviewQuestion getQuestionById(Long id) {
        return repository.findById(id)
                .orElse(null);
    }


    // Save question
    public InterviewQuestion saveQuestion(InterviewQuestion question) {
        return repository.save(question);
    }


    // Delete question
    public void deleteQuestion(Long id) {
        repository.deleteById(id);
    }
}
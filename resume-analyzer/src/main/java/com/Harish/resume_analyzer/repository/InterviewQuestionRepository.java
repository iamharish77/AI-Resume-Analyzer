package com.Harish.resume_analyzer.repository;

import com.Harish.resume_analyzer.entity.InterviewQuestion;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InterviewQuestionRepository extends JpaRepository<InterviewQuestion, Long> {

}
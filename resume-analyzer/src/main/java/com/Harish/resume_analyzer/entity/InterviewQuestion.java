package com.Harish.resume_analyzer.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class InterviewQuestion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String question;

    private String category; // Technical / HR

    private String skill;
}
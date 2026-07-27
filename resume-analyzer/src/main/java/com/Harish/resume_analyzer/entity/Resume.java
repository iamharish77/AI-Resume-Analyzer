package com.Harish.resume_analyzer.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Data
@Table(name = "resumes")
public class Resume {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    private String fileName;


    private String filePath;


    @Lob
    @Column(columnDefinition = "LONGTEXT")
    private String extractedText;


    private Integer atsScore;


    @Lob
    @Column(columnDefinition = "LONGTEXT")
    private String matchedSkills;


    @Lob
    @Column(columnDefinition = "LONGTEXT")
    private String missingSkills;


    @Lob
    @Column(columnDefinition = "LONGTEXT")
    private String suggestions;

    @Lob
    @Column(columnDefinition = "LONGTEXT")
    private String interviewQuestions;

    private LocalDateTime uploadedAt;


    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

}
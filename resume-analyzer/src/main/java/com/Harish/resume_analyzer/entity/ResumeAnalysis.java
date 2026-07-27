package com.Harish.resume_analyzer.entity;


import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;


@Entity
@Data
@Table(name = "resume_analysis")
public class ResumeAnalysis {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    private String fileName;


    private Integer atsScore;


    @Column(columnDefinition = "LONGTEXT")
    private String extractedText;


    @Column(columnDefinition = "LONGTEXT")
    private String matchedSkills;


    @Column(columnDefinition = "LONGTEXT")
    private String missingSkills;


    @Column(columnDefinition = "LONGTEXT")
    private String suggestions;


    private LocalDateTime uploadedAt;


}
package com.Harish.resume_analyzer.repository;


import com.Harish.resume_analyzer.entity.ResumeAnalysis;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ResumeAnalysisRepository extends JpaRepository<ResumeAnalysis, Long> {


}
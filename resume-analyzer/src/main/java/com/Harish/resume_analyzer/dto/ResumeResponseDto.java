package com.Harish.resume_analyzer.dto;

import java.time.LocalDateTime;

public class ResumeResponseDto {

    private Long id;
    private String fileName;
    private String filePath;
    private String fileType;
    private LocalDateTime uploadedAt;

    public ResumeResponseDto() {
    }

    public ResumeResponseDto(Long id, String fileName, String filePath, String fileType, LocalDateTime uploadedAt) {
        this.id = id;
        this.fileName = fileName;
        this.filePath = filePath;
        this.fileType = fileType;
        this.uploadedAt = uploadedAt;
    }

    public Long getId() {
        return id;
    }

    public String getFileName() {
        return fileName;
    }

    public String getFilePath() {
        return filePath;
    }

    public String getFileType() {
        return fileType;
    }

    public LocalDateTime getUploadedAt() {
        return uploadedAt;
    }
}
package com.Harish.resume_analyzer.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OpenAIConfig {


    @Value("${openai.api.key}")
    private String apiKey;


    @Bean
    public String openAIKey() {

        return apiKey;

    }

}
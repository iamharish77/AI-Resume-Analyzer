package com.Harish.resume_analyzer.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {


    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

        http
                // Disable CSRF for REST API development
                .csrf(csrf -> csrf.disable())

                // Allow all API requests without login
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/api/**").permitAll()
                        .anyRequest().permitAll()
                )

                // Disable default login page
                .formLogin(form -> form.disable())

                // Disable browser popup authentication
                .httpBasic(basic -> basic.disable());


        return http.build();
    }
}
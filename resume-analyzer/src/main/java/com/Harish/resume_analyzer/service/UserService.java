package com.Harish.resume_analyzer.service;

import com.Harish.resume_analyzer.entity.User;
import com.Harish.resume_analyzer.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // Get all users
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // Save user
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    // Get user by id
    public User getUserById(Long id) {
        return userRepository.findById(id)
                .orElse(null);
    }

    // Delete user
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
}
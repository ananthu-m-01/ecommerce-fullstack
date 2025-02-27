package com.ecommerce.ecommerce.services;

import com.ecommerce.ecommerce.model.User;
import com.ecommerce.ecommerce.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class UserService {
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    public User registerUser(User user) throws Exception {
        if (userRepository.findByUserName(user.getUserName()) != null) {
            throw new Exception("Username already exists!");
        }
        if (userRepository.findByEmailId(user.getEmailId()) != null) {
            throw new Exception("Email already exists!");
        }

        // Encrypt password before saving
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }
}

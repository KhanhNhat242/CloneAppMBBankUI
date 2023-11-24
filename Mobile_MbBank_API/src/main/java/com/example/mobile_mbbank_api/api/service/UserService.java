package com.example.mobile_mbbank_api.api.service;

import com.example.mobile_mbbank_api.api.model.User;
import com.example.mobile_mbbank_api.api.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserService implements UserDetailsService {
    @Autowired
    UserRepository userRepository;


    @Override
    public User loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByPhone(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found with phone: " + username));
        return user;

    }

    public User findById(String id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new UsernameNotFoundException("user id not found"));
    }
    public User findByUserName(String name){
        return userRepository.findByUsername(name)
                .orElseThrow(() -> new UsernameNotFoundException("user name not found"));
    }

}

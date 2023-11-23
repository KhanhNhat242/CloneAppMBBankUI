package com.example.mobile_mbbank_api.api.repository;

import com.example.mobile_mbbank_api.api.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface UserRepository extends MongoRepository<User, String> {
    Optional<User> findByUsername(String username);
    Optional<User> findByPhone(String phone);

}

package com.example.mobile_mbbank_api.api.repository;

import com.example.mobile_mbbank_api.api.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends MongoRepository<User, String> {
    Optional<User> findByUsername(String username);
    Optional<User> findByPhone(String phone);

}

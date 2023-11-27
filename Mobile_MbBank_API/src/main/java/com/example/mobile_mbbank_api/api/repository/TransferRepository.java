package com.example.mobile_mbbank_api.api.repository;

import com.example.mobile_mbbank_api.api.model.Transfer;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TransferRepository extends MongoRepository<Transfer, String> {

}

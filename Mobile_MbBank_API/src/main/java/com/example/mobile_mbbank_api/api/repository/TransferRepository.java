package com.example.mobile_mbbank_api.api.repository;

import com.example.mobile_mbbank_api.api.model.Transfer;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TransferRepository extends MongoRepository<Transfer, String> {

}

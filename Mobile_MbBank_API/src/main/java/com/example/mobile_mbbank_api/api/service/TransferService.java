package com.example.mobile_mbbank_api.api.service;

import com.example.mobile_mbbank_api.api.model.Transfer;
import com.example.mobile_mbbank_api.api.repository.TransferRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TransferService {
    @Autowired
    private TransferRepository transferRepository;

    public void createOrUpdate(Transfer t){
        transferRepository.save(t);
    }

    public List<Transfer> getAll(){
        return transferRepository.findAll();
    }
}

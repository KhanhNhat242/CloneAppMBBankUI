package com.example.mobile_mbbank_api.api.controller;

import com.example.mobile_mbbank_api.api.dto.LoginDTO;
import com.example.mobile_mbbank_api.api.dto.TokenDTO;
import com.example.mobile_mbbank_api.api.dto.TransferDTO;
import com.example.mobile_mbbank_api.api.model.RefreshToken;
import com.example.mobile_mbbank_api.api.model.Transfer;
import com.example.mobile_mbbank_api.api.model.User;
import com.example.mobile_mbbank_api.api.repository.TransferRepository;
import com.example.mobile_mbbank_api.api.repository.UserRepository;
import com.example.mobile_mbbank_api.api.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Date;
import java.util.Optional;

@RestController
@RequestMapping("/api/transfer")
public class TransferREST {
    @Autowired
    TransferRepository transferRepository;
    @Autowired
    UserRepository userRepository;
    @Autowired
    private UserService service;
    @PostMapping("/transfer_money")
    @Transactional
    public ResponseEntity<?> transfer(@Valid @RequestBody TransferDTO dto) {
        Date currentDate = new Date();

        Transfer transfer = new Transfer(currentDate,dto.getStkNguon(), dto.getStkNhan(), dto.getSoTien(), dto.getNoiDungCK());
        Optional<User> accountSource = userRepository.findByPhone(transfer.getStkNguon());
        User userSource = accountSource.orElse(null);
        Optional<User> account = userRepository.findByPhone(transfer.getStkNhan());
        User user = account.orElse(null);
        if(user==null){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Không tìm thấy tài khoản ");
        }

        if(userSource.getBalance()>transfer.getSoTien()){
            userSource.setBalance(userSource.getBalance()-transfer.getSoTien());
            user.setBalance(user.getBalance()+transfer.getSoTien());

            userRepository.save(userSource);
            userRepository.save(user);
        }
        else{
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Số tiền trong tài khoản không đủ");
        }



        transferRepository.save(transfer);
        return ResponseEntity.ok("Success");
    }
}

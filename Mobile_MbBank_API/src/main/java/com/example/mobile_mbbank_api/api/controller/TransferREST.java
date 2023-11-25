package com.example.mobile_mbbank_api.api.controller;

import com.example.mobile_mbbank_api.api.dto.LoginDTO;
import com.example.mobile_mbbank_api.api.dto.TokenDTO;
import com.example.mobile_mbbank_api.api.dto.TransferDTO;
import com.example.mobile_mbbank_api.api.model.RefreshToken;
import com.example.mobile_mbbank_api.api.model.Transfer;
import com.example.mobile_mbbank_api.api.model.User;
import com.example.mobile_mbbank_api.api.repository.TransferRepository;
import com.example.mobile_mbbank_api.api.repository.UserRepository;
import com.example.mobile_mbbank_api.api.service.TransferService;
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
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/transfer")
public class TransferREST {
    @Autowired
    private TransferService transferService;
    @Autowired
    private UserService userService;

    @PostMapping("/transferMoney")
    @Transactional
    @ResponseBody
    public boolean transferMoney(@RequestParam double money, @RequestParam String accountSource, @RequestParam(name = "stk") String accountGet, @RequestParam String content){
        User userGet = userService.findByPhone(accountGet);
        User userSource = userService.findByPhone(accountSource);

        if(userGet == null){
            return false;
        }
        else{
            Date currentDate = new Date();

            userGet.setBalance(userGet.getBalance() + money);
            userSource.setBalance(userSource.getBalance() - money);

            Transfer t = new Transfer(currentDate, accountSource, accountGet, money, content);

            userService.createOrUpdate(userGet);
            userService.createOrUpdate(userSource);
            transferService.createOrUpdate(t);

            return true;
        }
    }

    @GetMapping("/getAllTransaction")
    public List<Transfer> getAllTransaction() {
        return transferService.getAll();
    }
}


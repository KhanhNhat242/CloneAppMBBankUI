package com.example.mobile_mbbank_api.api.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class TokenDTO {
    private String userId;
    private String userName;
    private String phone;
    private double balance;
    private String accessToken;
    private String refreshToken;
}

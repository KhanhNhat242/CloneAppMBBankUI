package com.example.mobile_mbbank_api.api.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
public class LoginDTO {
    @NotBlank
    private String phone;
    @NotBlank
    private String password;
}

package com.example.mobile_mbbank_api.api.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TransferDTO {
    private String stkNguon;
    private String stkNhan;
    private double soTien;
    private String noiDungCK;
}

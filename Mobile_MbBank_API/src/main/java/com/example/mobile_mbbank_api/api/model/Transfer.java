package com.example.mobile_mbbank_api.api.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document
@Data
public class Transfer {
    @Id
    private String id;
    private Date time;
    private String stkNguon;
    private String stkNhan;
    private double soTien;
    private String noiDungCK;

    public Transfer(Date time, String stkNguon, String stkNhan, double soTien, String noiDungCK) {
        this.time = time;
        this.stkNguon = stkNguon;
        this.stkNhan = stkNhan;
        this.soTien = soTien;
        this.noiDungCK = noiDungCK;
    }
}

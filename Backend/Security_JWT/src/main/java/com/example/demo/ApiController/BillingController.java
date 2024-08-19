package com.example.demo.ApiController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.ApiService.BillingService;
import com.example.demo.Model.Billing;


@CrossOrigin
@RestController
public class BillingController {
    @Autowired
    private BillingService ser;

    @PostMapping("/postPay")
    private List<Billing> SaveDetailsRequest(@RequestBody List<Billing> billingList) {
        return ser.saveDetails(billingList);
    }
}

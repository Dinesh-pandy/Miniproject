package com.example.demo.ApiService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.ApiRepository.BillingRepository;
import com.example.demo.Model.Billing;

@Service
public class BillingService {

    @Autowired
    private final BillingRepository repo;

    public BillingService(BillingRepository repo) {
        this.repo = repo;
    }

    public List<Billing> saveDetails(List<Billing> billingList) {
        return repo.saveAll(billingList);
    }
}

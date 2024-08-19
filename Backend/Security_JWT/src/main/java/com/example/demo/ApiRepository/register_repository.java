package com.example.demo.ApiRepository;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Model.Product;


@EnableAutoConfiguration
@EntityScan(basePackages = "com.react.react.register_entity")
public interface register_repository extends JpaRepository<Product,Integer> {
    
}
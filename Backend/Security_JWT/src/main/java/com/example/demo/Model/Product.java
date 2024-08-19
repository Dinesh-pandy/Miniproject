package com.example.demo.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "products_data")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Product {
    @Id
    @Column(unique = true)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int product_id;
    private String product_name;
    private String product_quantity;
    private String product_price;
    private String product_total_price;
    private String product_image_path;
}

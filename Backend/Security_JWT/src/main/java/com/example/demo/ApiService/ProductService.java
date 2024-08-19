package com.example.demo.ApiService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.ApiRepository.register_repository;
import com.example.demo.Model.Product;


@Service
public class ProductService {
    @Autowired  
    private register_repository repo;
    public List<Product> getProduct(){
        return repo.findAll();        
    }

//    public String updateProduct(int product_id,Product pro){
//        pro.setProduct_id(product_id);
//        repo.saveAndFlush(pro);
//        return "Product saved successfully";
//    }
//      
}

package com.example.demo.ApiRepository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.Model.Appliance;

@Repository
public interface UserRepo extends JpaRepository<Appliance,String> {

}

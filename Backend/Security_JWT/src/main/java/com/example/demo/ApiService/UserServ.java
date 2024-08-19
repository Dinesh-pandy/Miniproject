package com.example.demo.ApiService;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.Model.Appliance;
import com.example.demo.ApiRepository.UserRepo;


@Service
public class UserServ {

	@Autowired
	private UserRepo repository;
	
	public Optional<Appliance> getDetails(String gmail)
	{
		return repository.findById(gmail);
	}
	public String updateDetails(Appliance stu)
	{
		repository.save(stu);
		return "Updated";
	}

}
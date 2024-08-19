package com.example.demo.ApiController;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.Appliance;
import com.example.demo.ApiRepository.UserRepo;
import com.example.demo.ApiService.UserServ;


@CrossOrigin
@RestController
public class RegisterController {
	@Autowired  
	private  UserRepo serviceRepository; 
	@Autowired
	private	UserServ service;

	@GetMapping("/get")
	 List<Appliance> getList(){
		return serviceRepository.findAll();
	}
	@PostMapping("/post")
	public Appliance create(@RequestBody Appliance stu) {
		  return serviceRepository.save(stu);
	}
	@GetMapping("/get/{email}")
	public Optional<Appliance> getbyid(@PathVariable String email){
		return service.getDetails(email);
	}
}
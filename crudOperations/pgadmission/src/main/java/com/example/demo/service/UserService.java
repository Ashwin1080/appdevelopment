package com.example.demo.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepo;


@Service

public class UserService {
      
      @Autowired
  	UserRepo userRepository;
  	public User create(User users) {
  		return userRepository.save(users);
  	}
  	public Optional<User> read(Long id){
  		return userRepository.findById(id);
  	}
  	public User update(User users) {
  		return userRepository.save(users);
  		
  	}
  	public void delete(Long Id) {
  		userRepository.deleteById(Id);
  	}
  	
}
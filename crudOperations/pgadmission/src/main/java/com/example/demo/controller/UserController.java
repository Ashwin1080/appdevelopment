package com.example.demo.controller;


import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.User;
import com.example.demo.service.UserService;
import com.fasterxml.jackson.core.JsonProcessingException;

@RestController
public class UserController {
	
	UserService userService;
	
	@PostMapping("/post")
	public ResponseEntity<User> create(final @RequestBody User users){
		User createUser=userService.create(users);
		return ResponseEntity.ok(createUser);
	}
	
	@GetMapping("/user")
	public ResponseEntity<Optional<User>> read(final @PathVariable Long id){
		Optional<User> createdCandidate=userService.read(id);
		return ResponseEntity.ok(createdCandidate);
	}
	
	@PutMapping("/put")
	public ResponseEntity<User> update(final @RequestBody User user)throws  JsonProcessingException{
		final User updatedUser=userService.update(user);
		return ResponseEntity.ok(updatedUser);
	}
	
	@DeleteMapping("/delete")
	public void delete(final @PathVariable Long id) {
		userService.delete(id);
	}
}
package com.pgadmission.main.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pgadmission.main.model.Application;
import com.pgadmission.main.model.User;

public interface ApplicationRepo extends JpaRepository<Application, Long> {
	

	List<Application> findByUser(User user);
}
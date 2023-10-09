package com.pgadmission.main.repository;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pgadmission.main.model.User;

@Repository
public interface UserRepo extends JpaRepository<User,Long> {

	Optional<User> findByEmail(String email);
	User findByUid(Long id);

    void deleteByUid(Long Uid);
}
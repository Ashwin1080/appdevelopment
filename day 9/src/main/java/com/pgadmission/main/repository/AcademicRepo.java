package com.pgadmission.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pgadmission.main.model.Academic;

@Repository
public interface AcademicRepo extends JpaRepository<Academic,Long> {

}

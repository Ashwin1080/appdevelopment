package com.pgadmission.main.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.pgadmission.main.constant.Api;
import com.pgadmission.main.model.Academic;
import com.pgadmission.main.model.User;
import com.pgadmission.main.service.AcademicService;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(Api.ACADEMIC)
@RequiredArgsConstructor
@Tag(name = "Academic")
public class AcademicController {
		@Autowired
		AcademicService as;
		

		@PostMapping("/post")
		public ResponseEntity<Academic> create(final @RequestBody Academic a){
			Academic createData=as.create(a);
			return ResponseEntity.ok(createData);
		}
		
		@GetMapping("/all")
	    public ResponseEntity<List<Academic>> getAllUsers() {
	        List<Academic> academicList = as.getAllAcademicData();
	        return ResponseEntity.ok(academicList);
	    }
		
		@PutMapping("/put")
		public ResponseEntity<Academic> update(final @RequestBody Academic a)throws  JsonProcessingException{
			final Academic updatedData=as.update(a);
			return ResponseEntity.ok(updatedData);
		}
		
		@DeleteMapping("/delete/{id}")
		public void delete(final @PathVariable Long id) {
			as.delete(id);
		}
}

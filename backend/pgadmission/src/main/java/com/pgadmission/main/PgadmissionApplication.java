package com.pgadmission.main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;

@OpenAPIDefinition(
		info =@Info(
				title = "Pg Admission form",
				version = "1.1.2",
				description = "App Description",
				contact = @Contact(
						name = "Arun",
						email = "Author Email"
						)
				)
		)

@SpringBootApplication
public class PgadmissionApplication {

	public static void main(String[] args) {
		SpringApplication.run(PgadmissionApplication.class, args);
	}

}

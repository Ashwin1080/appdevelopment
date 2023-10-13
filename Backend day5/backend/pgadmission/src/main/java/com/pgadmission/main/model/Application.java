package com.pgadmission.main.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="Application")
public class Application {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String fathersName;	
    private String mothersName;
    private String marks10;
    private String marks12;
    private String ugCgpa;
    private String pgCollegeName;

    @ManyToOne
    @JoinColumn(name = "uid",nullable=false)  // This is the foreign key column in the Applications table
    private User user;
}


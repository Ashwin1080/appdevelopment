package com.pgadmission.main.service;

import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pgadmission.main.model.Application;
import com.pgadmission.main.model.User;
import com.pgadmission.main.repository.ApplicationRepo;
import com.pgadmission.main.repository.UserRepo;

@Service
public class ApplicationService {
	@Autowired
	UserRepo userRepo;
    private final ApplicationRepo applicationRepository;

    public ApplicationService(ApplicationRepo applicationRepository) {
        this.applicationRepository = applicationRepository;
    }

    public List<Application> getAllApplications() {
        return applicationRepository.findAll();
    }
    
//    public List<Application> getAllApplicationsByUserId(Long userId) {
//        User user = userRepo.findById(userId).orElse(null); // Assuming you have a UserRepository
//        if (user != null) {
//            return user.getApplications();
//        } else {
//            return Collections.emptyList();
//        }
//    }
    public List<Application> getApplicationsByUser(User user) {
        return applicationRepository.findByUser(user);
    }
    public Application getApplicationById(Long id) {
        return applicationRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Application not found"));
    }

    public Application createApplication(Application application) {
        return applicationRepository.save(application);
    }

    public Application updateApplication(Long id, Application updatedApplication) {
        Application existingApplication = getApplicationById(id);

        // Update the fields you want to allow
        existingApplication.setName(updatedApplication.getName());
        existingApplication.setFathersName(updatedApplication.getFathersName());
        existingApplication.setMothersName(updatedApplication.getMothersName());
        existingApplication.setMarks10(updatedApplication.getMarks10());
        existingApplication.setMarks12(updatedApplication.getMarks12());
        existingApplication.setUgCgpa(updatedApplication.getUgCgpa());
        existingApplication.setPgCollegeName(updatedApplication.getPgCollegeName());

        return applicationRepository.save(existingApplication);
    }

    public void deleteApplication(Long id) {
        getApplicationById(id);
        applicationRepository.deleteById(id);
    }
}

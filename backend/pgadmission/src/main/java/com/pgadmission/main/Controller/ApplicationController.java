package com.pgadmission.main.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pgadmission.main.constant.Api;
import com.pgadmission.main.model.Application;
import com.pgadmission.main.model.User;
import com.pgadmission.main.service.ApplicationService;
import com.pgadmission.main.service.UserService;

@CrossOrigin
@RestController
@RequestMapping(Api.APPLICATION)
public class ApplicationController {
	
	@Autowired
	UserService userService;
    private final ApplicationService applicationService;

    public ApplicationController(ApplicationService applicationService) {
        this.applicationService = applicationService;
    }

//    @GetMapping("/getall/{userId}")
//    public List<Application> getAllApplicationsByUserId(@PathVariable Long userId) {
//        return applicationService.getAllApplicationsByUserId(userId);
//    }	
    	
    @GetMapping("/{id}")
    public Application getApplicationById(@PathVariable Long id) {
        return applicationService.getApplicationById(id);
    }
    
    @GetMapping("/get")
    public List<Application> getApplication() {
        return applicationService.getAllApplications();
    }
    
    @GetMapping("/user")
    public List<Application> getAppbyUser(@RequestBody User user)
    {
    	return applicationService.getApplicationsByUser(user);
    }
    
    @PostMapping("/post")
    public Application createApplication(@RequestBody Application application) {
        return applicationService.createApplication(application);
    }
    
    @PutMapping("/put/{id}")
    public Application updateApplication(@PathVariable Long id, @RequestBody Application updatedApplication) {
        return applicationService.updateApplication(id, updatedApplication);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteApplication(@PathVariable Long id) {
        applicationService.deleteApplication(id);
    }
}

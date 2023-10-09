package com.pgadmission.main.service;

import com.pgadmission.main.dto.request.AuthenticationRequest;
import com.pgadmission.main.dto.request.RegisterRequest;
import com.pgadmission.main.dto.response.AuthenticationResponse;

public interface AuthService {
    boolean userRegistration(RegisterRequest request);

    AuthenticationResponse userAuthentication(AuthenticationRequest request);

}

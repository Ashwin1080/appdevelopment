package com.pgadmission.main.constant;


import java.util.Arrays;
import java.util.List;

public class Api {
    public static final String AUTH = "/api/auth";
    public static final String USER = "/api/user";
    public static final String ACADEMIC = "/api/academic";
    public static final String APPLICATION = "/api/applications";
    public static final List<String> HEADERS = Arrays.asList("Authorization", "Content-Type");
    public static final List<String> METHODS = Arrays.asList("GET", "POST", "PUT", "DELETE");
    public static final List<String> ORIGINS = Arrays.asList("http://localhost:3000");
}

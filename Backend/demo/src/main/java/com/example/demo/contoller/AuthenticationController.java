package com.example.demo.contoller;

import com.example.demo.entity.Customer;
import com.example.demo.model.LoginRequest;
import com.example.demo.model.RegisterRequest;
import com.example.demo.repository.CustomerRepository;
import com.example.demo.service.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Objects;

@RestController
@RequestMapping("/auth")
@CrossOrigin("*")
public class AuthenticationController {

    private AuthenticationService authenticationService;
    private CustomerRepository customerRepository;

    @Autowired
    public AuthenticationController(AuthenticationService authenticationService) {
        this.authenticationService = authenticationService;
    }

    @PostMapping("/register")
    public String register(@RequestBody RegisterRequest registerRequest){
        String response = authenticationService.register(registerRequest);
        return response;
    }

    @PostMapping("/login")
    public String login(@RequestBody LoginRequest loginRequest){
      String response=authenticationService.login(loginRequest.getEmail(),loginRequest.getPassword());
        return response;
    }
}

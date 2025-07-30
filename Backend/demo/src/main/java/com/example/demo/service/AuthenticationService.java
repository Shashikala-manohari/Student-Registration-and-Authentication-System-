package com.example.demo.service;

import com.example.demo.entity.Customer;
import com.example.demo.model.LoginRequest;
import com.example.demo.model.RegisterRequest;
import com.example.demo.repository.CustomerRepository;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
public class AuthenticationService {

    private CustomerRepository customerRepository;

    public AuthenticationService(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    public String register(RegisterRequest registerRequest){
        Customer customerNew= new Customer(
                registerRequest.getContactNo(),
                registerRequest.getEmail(),
                registerRequest.getName(),
                registerRequest.getPassword()
        );

        customerRepository.save(customerNew);
        return "Registration Successfull ";
    }
   public String login(String email,String password){
       Customer customer =customerRepository.findByEmail(email);
        if (Objects.nonNull(customer)){
            Customer customer1=customerRepository.findByEmailAndPassword(email,password);
            if (Objects.nonNull(customer1)){
                return "Login Successfull";
            }
            return "Invalid Password";
        }
        return "User Not Found for Given Email";
   }
}

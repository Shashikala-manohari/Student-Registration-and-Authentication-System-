package com.example.demo.model;

public class RegisterRequest {
    private String email;
    private String name;
    private String contactNo;
    private String password;

    public RegisterRequest(String email, String name, String contactNo, String password) {
        this.email = email;
        this.name = name;
        this.contactNo = contactNo;
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getContactNo() {
        return contactNo;
    }

    public void setContactNo(String contactNo) {
        this.contactNo = contactNo;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}


import React, { useState } from 'react'

import {Form,Button,Container,Row,Col} from 'react-bootstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import InputGroup from 'react-bootstrap/InputGroup';


import axios from 'axios';

import './Register.css'
import { Link } from 'react-router-dom';


const Register = () => {
    const[formData,setFormData]=useState({
        email:'',
        name:'',
        contactNo:'',
        password:''
    });

    const [validated, setValidated] = useState(false);
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true); 

        axios.post('http://localhost:9001/auth/register',formData)
            .then(function (response) {
                console.log(response);
                setSuccess('Registration successful!');
            })
            .catch(function (error) {
                console.log(error);
            })
        }

        const handleChange =(e)=>{
            const {name,value} = e.target;
            setFormData({
                ...formData,
                [name]:value,
            });
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='register-container-root'>
            <Container className='register-container'>
                <Row className='justify-content-md-center'>
                    <Col md={6}>
                    <h2>Register</h2>
                    <Form>
                        <Form.Group controlId='formBasicEmail' className='form-group'>
                            <Form.Label className='label'>Email:</Form.Label>
                            <Form.Control
                                type='email'
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId='formBasicName' className='form-group'>
                            <Form.Label className='label'>Name:</Form.Label>
                            <Form.Control
                                type='text'
                                name='name'
                                value={formData.name}   
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId='formBasicContact' className='form-group'>
                            <Form.Label className='label'>Contact Number:</Form.Label>
                            <Form.Control
                                type='text'
                                name='contactNo'
                                value={formData.contactNo}   
                                onChange={handleChange}
                            />
                        </Form.Group>

                         <Form.Group controlId='formBasicPassword' className='form-group'>
                            <Form.Label className='label'>Password:</Form.Label>
                            <div className="password-input-wrapper">
                            <Form.Control
                                type={showPassword ? 'text' : 'password'}
                                name='password'
                                value={formData.password}   
                                onChange={handleChange}
                            />
                             <span className="password-toggle" onClick={togglePasswordVisibility}>
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                        </Form.Group> 
                        <div>
                        <Button variant='primary' className='w-100' onClick={handleSubmit}>
                            Submit
                        </Button>
                        </div>
                    </Form>
                    </Col>
                </Row>
                <div>
                        <p className="success-message">{success}</p>
                        
                </div>
                <div>
                    <Link to="/Login" className="login-link">Login Here..</Link>
                </div> 
            </Container>
        </div>
     
    );
}


export default Register
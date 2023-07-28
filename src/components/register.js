import React,{useState} from 'react'
import {Link, useNavigate} from 'react-router-dom';
import axios from "axios";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";

const Register=()=> {
	const UPPERCASE_PATTERN = /[A-Z]/;

const LOWERCASE_PATTERN = /[a-z]/;

const NUMBER_PATTERN = /[0-9]/;

const SPECIAL_CHAR_PATTERN = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;
	const navigate = useNavigate();


    
    const [formValues, setFormValues] =
	useState({ email: '', password: '' })
    const onSubmit = studentObject => {
        axios.post(
    'http://localhost:4000/students/create-student',
        studentObject)
        .then(res => {
            if (res.status === 200)
			{navigate("/student-list")}

            else
            Promise.reject()
        })
        .catch(err => alert('Something went wrong'))
    }
    const validationSchema = Yup.object().shape({
        email: Yup.string()
        .email("You have enter an invalid email address")
        .required("Email is Required"),
        password: Yup.string()
		.required("Password is required")
		.min(8, "Password must be atleast 8 characters long")
		.matches(UPPERCASE_PATTERN, "Password must contain a uppercase letter")
		.matches(LOWERCASE_PATTERN, "Password must contain a lowercase letter")
		.matches(NUMBER_PATTERN, "Password must contain a number")
		.matches(SPECIAL_CHAR_PATTERN, "Password must contain a special character")
		
    
        
    });
  return (
    <>
	<div className='form-wrapper'>


	<div className="text-black font-semibold text-4xl mb-3 mt-10 text-center">Direct Login</div>
       <Formik  validationSchema={validationSchema}  initialValues={formValues}
	onSubmit={onSubmit}
	enableReinitialize>
		<Form>
		<FormGroup className='mb-4'>
			<label>Email</label>
			<Field name="email" type="text"
				className="form-control" />
			<ErrorMessage
			name="email"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<FormGroup className='mb-4'>
		<label>Password</label>
			<Field name="password" type="text"
				className="form-control" />
			<ErrorMessage
			name="password"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<Button variant="danger" size="lg"
			block="block" type="submit">
			Submit
		</Button>
		</Form>
	</Formik>
	</div>
    </>
  )
}

export default Register
import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";
import { Nav, Navbar, Container,Row }
		from "react-bootstrap";
import { BrowserRouter as Router, Routes,
			Route, Link } from "react-router-dom";
			import "bootstrap/dist/css/bootstrap.css";
			
const StudentForm = (props) => {

	const UPPERCASE_PATTERN = /[A-Z]/;

	const LOWERCASE_PATTERN = /[a-z]/;
	
	const NUMBER_PATTERN = /[0-9]/;
	
	const SPECIAL_CHAR_PATTERN = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;
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
console.log(props);
return (
	<div className="form-wrapper">
		


		
				
			

			
				
			
			
			
		
	<Formik {...props} validationSchema={validationSchema}>
	  

		
		<Form className="">
		<FormGroup className="mb-4">
		<label>Email</label>
			<Field name="email" type="text"
				className="form-control " />
			<ErrorMessage
			name="email"
			className="d-block invalid-feedback "
			component="span"
			/>
		</FormGroup>
		<FormGroup  className="mb-4">
			<label>Password</label>
			<Field name="password" type="text"
				className="form-control " />
			<ErrorMessage
			name="password"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<Button variant="danger" size="lg"
			block="block" type="submit">
			{props.children}
		</Button>
		</Form>
		
	</Formik>
	</div>
);
};

export default StudentForm;

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
const validationSchema = Yup.object().shape({
	email: Yup.string()
	.email("You have enter an invalid email address")
	.required("Required"),
	password: Yup.string().required(),

	
});
console.log(props);
return (
	<div className="form-wrapper">
		


		
				
			

			
				
			
			
			
		
	<Formik {...props} validationSchema={validationSchema}>
	  

		
		<Form className="">
		<FormGroup className="mb-4">
			<Field name="email" type="text"
				className="form-control " />
			<ErrorMessage
			name="email"
			className="d-block invalid-feedback "
			component="span"
			/>
		</FormGroup>
		<FormGroup  className="mb-4">
			<Field name="password" type="number"
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

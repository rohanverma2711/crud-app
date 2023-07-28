import React,{useState} from 'react'
import {Link, useNavigate} from 'react-router-dom';
import axios from "axios";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";

const Register=()=> {
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
        .required("Required"),
        password: Yup.string().required(),
    
        
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
			<Field name="email" type="text"
				className="form-control" />
			<ErrorMessage
			name="email"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<FormGroup className='mb-4'>
			<Field name="password" type="number"
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
// CreateStudent Component for add new student

// Import Modules
import React, { useState, useEffect } from "react";
import axios from 'axios';
import StudentForm from "./StudentForm";
import { useNavigate } from "react-router-dom";

// CreateStudent Component
const CreateStudent = () => {

	const navigate = useNavigate();
const [formValues, setFormValues] =
	useState({ email: '', password: '' })
	console.log(formValues,"asdsada")
// onSubmit handler
const onSubmit = studentObject => {
	axios.post(
'http://localhost:4000/students/create-student',
	studentObject)
	.then(res => {
		if (res.status === 200)
		{alert('Student successfully created')
		navigate("/student-list")}
		else
		Promise.reject()
	})
	.catch(err => alert('Something went wrong'))
}
	
// Return student form
return(

	<>
<div className="text-black font-semibold text-4xl mb-3 mt-10 text-center">Create User</div>
<StudentForm initialValues={formValues}
	onSubmit={onSubmit}
	enableReinitialize>
	Create User
	</StudentForm>
	
	</>

)
}

// Export CreateStudent Component
export default CreateStudent

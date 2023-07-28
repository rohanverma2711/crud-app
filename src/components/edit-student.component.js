// EditStudent Component for update student data

// Import Modules
import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentForm from "./StudentForm";
import { useParams, useNavigate } from "react-router-dom";

// EditStudent Component
const EditStudent = (props) => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const { id } = useParams();

  console.log(id, "idddd");

  //onSubmit handler
  const onSubmit = (studentObject) => {
    axios
      .put("http://localhost:4000/students/update-student/" + id, studentObject)
      .then((res) => {
        if (res.status === 200) {
          alert("Student successfully updated");
          navigate("/student-list");
        } else Promise.reject();
      })
      .catch((err) => console.log(err));
  };

  // Load data from server and reinitialize student form
  useEffect(() => {
    axios
      .get("http://localhost:4000/students/update-student/" + id)
      .then((res) => {
        const { email, password } = res.data;
        setFormValues({ email, password });
      })
      .catch((err) => console.log(err));
  }, []);

  // Return student form
  return (
    <div>
      <div className="text-black font-semibold text-4xl mb-3 mt-10 text-center">
        Edit User
      </div>
      <StudentForm
        initialValues={formValues}
        onSubmit={onSubmit}
        enableReinitialize
      >
        Update Student
      </StudentForm>
    </div>
  );
};

// Export EditStudent Component
export default EditStudent;

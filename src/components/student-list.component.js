import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import StudentTableRow from "./StudentTableRow";

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/students/")
      .then(({ data }) => {
        setStudents(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const DataTable = () => {
    return students.map((res, i) => {
      return <StudentTableRow obj={res} key={i} />;
    });
  };

  return (
    <>
      <div className="flex flex-row justify-between bg-black text-white h-16 items-center px-20">
        <div>React CRUD App</div>
        <div>
          <Link to={"/create-student"} className="nav-link">
            Create User
          </Link>
        </div>
      </div>

      <div className="table-wrapper ">
        <div className="text-black font-semibold text-xl mb-3 mt-10">
          User List
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Email</th>
              <th>Password</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{DataTable()}</tbody>
        </Table>
      </div>
    </>
  );
};

export default StudentList;

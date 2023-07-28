
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter as Router, Routes,
	Route, Link } from "react-router-dom";
import CreateStudent from "./components/create-student.component";
import EditStudent from "./components/edit-student.component";
import StudentList from "./components/student-list.component";

import Register from "./components/register";

// App Component
const App = () => {
return (
	<Router>
	<div className="App">
		
			<div className="">
				<Routes>
					<Route  path="/"
					element={<Register/>} />
				<Route path="/create-student"
					element={<CreateStudent/>} />
				<Route path="/edit-student/:id"
					element={<EditStudent/>} />
				<Route path="/student-list"
					element={<StudentList/>} />
				</Routes>
			</div>
		
	</div>
	</Router>
);
};

export default App;

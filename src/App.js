import React from "react";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import EmployeeList from "./sample.js";
import SingleEmployee from "./singleEmployee";
import "./styles.css";
import useFetchData from "./useFetchData";
import HomePage from "./HomePage";
import logo from "../src";
import EmployeeRegistration from "./employeeRegistration.js";
export default function App() {
  const { employeeList } = useFetchData();
  return (
    <BrowserRouter>
      <div className="header">
        <Link to="/" className="link">
          HomePage
        </Link>
        <Link to="/employees" className="link">
          Employees
        </Link>
        <Link to="/employees/1" className="link">
          SingleEmployee
        </Link>
        <Link to="/employee/registration" className="link">
          EmployeeRegistration
        </Link>
        <Link to="/employee/registration" className="link">
          EmployeeSearch
        </Link>
      </div>
      <div className="content"></div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/employees"
          element={<EmployeeList employeeList={employeeList} />}
        />
        <Route
          path="/employees/:id"
          element={<SingleEmployee employeeList={employeeList} />}
        />
        <Route
          path="/employee/registration"
          element={<EmployeeRegistration />}
        />
        <Route path="/employee/search" element={<EmployeeSearch />} />
      </Routes>
    </BrowserRouter>
  );
}

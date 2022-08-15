import React from "react";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import EmployeeList from "./sample.js";
import SingleEmployee from "./singleEmployee";
import "./styles.css";
import useFetchData from "./useFetchData";
import HomePage from "./HomePage";
import logo from "../src"
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
      </Routes>
    </BrowserRouter>
  );
}

import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import BasicCard from "./demo";
import { getList } from "./getList";
import "./styles.css";

const EmployeeList = (props) => {
  const { employeeList } = props;
  return (
    <div className="page">
      <h1 className="title is-1">This is the Employee List Page</h1>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {employeeList.map((employee) => {
          return <BasicCard employee={employee} key={employee.id} />;
        })}
      </Grid>
    </div>
  );
};
export default EmployeeList;

import { Grid } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom";
import BasicCard from "./demo";
const employee = [
  {
    id: 1,
    name: "Roy",
    image: "https://mui.com/static/images/avatar/1.jpg",
    designation: "Project Manager",
    dateHired: "Date Hired",
    team: "Design Team",
    date: "13-08-2022",
    status: "Active",
    email: "test@gmail.com",
    phone: "+12-564-789"
  },
  {
    id: 2,
    name: "Paul",
    image: "https://mui.com/static/images/avatar/3.jpg",
    designation: "UI Designer",
    team: "Development",
    status: "Not Active",
    dateHired: "Date Hired",
    date: "13-08-2022",
    email: "abc@gmail.com",
    phone: "+12-789-789"
  },
  {
    id: 3,
    name: "sam",
    image: "https://mui.com/static/images/avatar/2.jpg",
    designation: "Designer",
    team: "Programmer ",
    status: "Active",
    dateHired: "Date Hired",
    date: "15-08-2022",
    email: "test@gmail.com",
    phone: "+12-789-789"
  },
  {
    id: 4,
    name: "Wonder Woman4",
    image: "https://mui.com/static/images/avatar/3.jpg",
    designation: "UI Designer",
    team: "Development",
    status: "Not Active",
    dateHired: "Date Hired",
    date: "13-09-2022",
    email: "abcdef@gmail.com",
    phone: "+16-789-789"
  }
];


const EmployeeList = () => {
  return (
    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {employee.map((employee) => {
        return <BasicCard employee={employee} />;
      })}
    </Grid>
  );
};
export default EmployeeList;

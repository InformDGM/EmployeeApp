import React, { useState, useEffect } from "react";
import axios from "axios";
import { LineAxisOutlined } from "@mui/icons-material";
import { response } from "express";

export default function EmployeeSearch() {
  const [userName, setUserName] = useState([]);
  useEffect(() => {
    axios
      .get(`https://mockend.com/InformDGM/MockendDB/users`)
      .then((response) => {
        setUserName(response.data);
      });
  }, []);
  return (
    <div>
      <h1>Search for an Employee </h1>
      <Input
        icon="search"
        placeholder="Search..."
        onChange={(e = setUserName(e.target.value))}
      />
    </div>
  );
}

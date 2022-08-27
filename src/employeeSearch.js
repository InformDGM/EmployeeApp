import React, { useState, useEffect } from "react";
import axios from "axios";
import { LineAxisOutlined } from "@mui/icons-material";
import { response } from "express";

export default function EmployeeSearch() {
  const [APIData, setAPIData] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://mockend.com/InformDGM/MockendDB/users/"
      );
      setAPIData(response.data);
    };
    fetchData();
  }, []);
  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = APIData.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(APIData);
    }
  };
  return (
    <div style={{ padding: 20 }}>
      <Input
        icon="search"
        placeholder="Search..."
        onChange={(e) => searchItems(e.target.value)}
      />
      <Card.Group itemsPerRow={3} style={{ marginTop: 20 }}>
        {searchInput.length > 1
          ? filteredResults.map((item) => {
              return (
                <Card>
                  <Card.Content>
                    <Card.Header>{item.firstName}</Card.Header>
                  </Card.Content>
                </Card>
              );
            })
          : APIData.map((item) => {
              return (
                <Card>
                  <Card.Content>
                    <Card.Header>{item.firstName}</Card.Header>
                  </Card.Content>
                </Card>
              );
            })}
      </Card.Group>
    </div>
  );
}

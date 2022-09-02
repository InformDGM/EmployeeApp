import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Card, Input } from "semantic-ui-react";
import _debounce from "lodash/debounce";
export default function EmployeeSearch() {
  const [APIData, setAPIData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const handleDebounceFn = async (searchInput) => {
    const result = await axios(
      `https://mockend.com/InformDGM/MockendDB/users?firstName_startsWith=${searchInput}`
    );
    setAPIData(result?.data || []);
  };
  const debounceFn = useCallback(_debounce(handleDebounceFn, 1000), []);

  useEffect(() => {
    if (searchInput !== "") {
      const result = debounceFn(searchInput);
    }
  }, [searchInput]);

  return (
    <div>
      <Input
        icon="search"
        placeholder="Search..."
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <Card.Group itemsPerRow={3} style={{ marginTop: 20 }}>
        {APIData.map((item) => {
          return (
            <Card key={item.id}>
              <Card.Content>
                <Card.Header style={{ color: "white" }}>
                  {item.firstName}
                </Card.Header>
              </Card.Content>
            </Card>
          );
        })}
      </Card.Group>
    </div>
  );
}

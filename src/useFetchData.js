import React, { useEffect } from "react";
import { getList } from "./getList";

const useFetchData = () => {
  const [employeeList, setEmployeeList] = React.useState([]);
  useEffect(() => {
    getList()
      .then((items) => {
        setEmployeeList(items.data);
      })
      .catch(() => {
        console.log("error");
      });
  }, []);
  return { employeeList, setEmployeeList };
};
export default useFetchData;

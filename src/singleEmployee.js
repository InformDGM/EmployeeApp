import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import PhoneIcon from "@mui/icons-material/Phone";
import { faker } from "@faker-js/faker";
import { Routes, Route, useParams } from "react-router-dom";

const SingleEmployee = (props) => {
  const { employeeList } = props;
  const avatarUrl = faker.image.avatar();
  const phoneNumber = faker.phone.phoneNumber();
  const email = faker.internet.email();
  let { id } = useParams();
  let emp = employeeList.find((employee) => employee.id === Number(id));
  console.log("list", employeeList);
  console.log("id", typeof id);
  console.log("emp", emp);

  if (!emp) return null;
  return (
    <div className="page">
      <h1 className="title is-1">Employee Profile Page</h1>
      <Grid container>
        <Grid item xs={3} sx={{ border: "1px solid yellow" }}>
          <Card sx={{ minWidth: 50 }}>
            <CardContent>
              <Box
                sx={{
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                  bgcolor: "grey",
                  marginTop: "15px",
                }}
              >
                <Avatar
                  alt="employee1"
                  src={avatarUrl}
                  sx={{ width: 100, height: 100 }}
                />
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {emp.firstName}
                </Typography>
                <Typography
                  sx={{ fontSize: 14 }}
                  variant="h2"
                  color="text.secondary"
                  gutterBottom
                >
                  {emp.age}
                </Typography>
              </Box>
              <Paper
                sx={{
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                  bgcolor: "#E7F1FC",
                }}
              >
                <Grid container>
                  <Grid item xs={3} md={6}>
                    <Typography>Department</Typography>
                  </Grid>
                  <Grid item xs={3} md={6}>
                    <Typography>Designation</Typography>
                  </Grid>
                  <Grid item xs={3} md={6}>
                    <Typography>{emp.employee_salary}</Typography>
                  </Grid>
                  <Grid item xs={3} md={6}>
                    <Typography>Joining Date</Typography>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item sx={{ marginTop: 2 }}>
                    <Box sx={{ display: "Inline-flex", alignItems: "center" }}>
                      <MailOutlineIcon fontSize="small" />{" "}
                      <Typography sx={{ paddingLeft: "3px" }}>
                        Email:
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item>
                    <Box sx={{ display: "Inline-flex", alignItems: "center" }}>
                      <PhoneIcon fontSize="small" />{" "}
                      <Typography sx={{ paddingLeft: "3px" }}>
                        Phone Number
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Paper>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default SingleEmployee;

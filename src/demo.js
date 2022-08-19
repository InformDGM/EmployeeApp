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
import FormLabel from "@mui/material/FormLabel";
import { useNavigate } from "react-router-dom";

export default function BasicCard(props) {
  const { employee } = props;
  let navigate = useNavigate();
  return (
    <Grid item xs={3} sx={{ border: "1px solid yellow" }}>
      <Card sx={{ minWidth: 50 }}>
        <CardContent>
          <Box sx={{ justifyContent: "flex-end", display: "flex" }}>
            <Paper elevation={1} sx={{ padding: 1 }}>
              <FormLabel>Status</FormLabel>
            </Paper>
          </Box>

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
              sx={{ fontSize: 14, paddingTop: 18 }}
              color="text.secondary"
              gutterBottom
            >
              {employee.firstName}
            </Typography>
            <Typography
              sx={{ fontSize: 14 }}
              variant="h2"
              color="text.secondary"
              gutterBottom
            >
              Age {employee.age}
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
              <Grid item xs={12} md={6}>
                <Typography>Salary</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography>{employee.employee_salary}</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography>{employee.team}</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography>{employee.date}</Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item sx={{ marginTop: 2 }}>
                <Box sx={{ display: "Inline-flex", alignItems: "center" }}>
                  <MailOutlineIcon fontSize="small" />{" "}
                  <Typography sx={{ paddingLeft: "3px" }}>{email}</Typography>
                </Box>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item>
                <Box sx={{ display: "Inline-flex", alignItems: "center" }}>
                  <PhoneIcon fontSize="small" />{" "}
                  <Typography sx={{ paddingLeft: "3px" }}>
                    {phoneNumber}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </CardContent>
        <CardActions>
          <Button
            size="Large"
            onClick={() => navigate(`/employees/${employee.id}`)}
          >
            Details
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

import * as React from "react";
import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { InputLabel, Input } from "@mui/material";

const EmployeeRegistration = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box sx={{ "& button": { m: 1 } }}>
      <h1 className="registration"> Registration Form Page </h1>;
      <div className="register">
        <Button variant="contained" size="medium">
          Submit
        </Button>
      </div>
    </Box>
  );
};

export default EmployeeRegistration;

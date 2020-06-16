import React, { useContext, useState } from "react";
import {
  Grid,
  TextField,
  Typography,
  Button,
  Divider
} from "@material-ui/core";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const [fields, setFields] = useState({
    text: "",
    amount: ""
  });
  //For field validation
  const [errors, setErrors] = useState({
    text: null,
    amount: null
  });

  const handleClick = () => {
    handleValidation();
    if (
      !errors.text &&
      !errors.amount &&
      fields.text !== "" &&
      fields.text !== ""
    )
      addTransaction(fields.text, parseFloat(fields.amount));
    setFields({
      text: "",
      amount: ""
    });
  };

  const handleValidation = () => {
    let obj = {};
    if (fields.text === "") {
      obj.text = true;
    }
    if (fields.amount === "") {
      obj.amount = true;
    } else {
      obj.amount = isNaN(fields.amount);
    }
    setErrors({ ...errors, ...obj });
  };

  const handleChange = event => {
    setErrors({
      text: false,
      amount: false
    });
    let obj = {};
    obj[event.target.name] = event.target.value;
    setFields({ ...fields, ...obj });
  };

  const { addTransaction } = useContext(GlobalContext);
  return (
    <Grid container direction="column">
      <Typography variant="h6">Add Transaction</Typography>
      <Divider />
      <br />
      <Typography
        variant="caption"
        align="left"
        color={errors.text ? "error" : "textSecondary"}
      >
        Text
      </Typography>
      <TextField
        name="text"
        error={errors.text}
        variant="outlined"
        value={fields.text}
        onChange={handleChange}
        size="small"
        onBlur={() => handleValidation()}
        helperText={errors.text ? "Text field cannot be empty" : null}
      />
      <br />
      <Typography
        variant="caption"
        align="left"
        color={errors.amount ? "error" : "textSecondary"}
      >
        Enter amount
      </Typography>
      <TextField
        name="amount"
        error={errors.amount}
        variant="outlined"
        value={fields.amount}
        onChange={handleChange}
        size="small"
        onBlur={() => handleValidation()}
        helperText={
          errors.amount ? "Amount field can only contain numbers" : null
        }
      />
      <br />
      <Button variant="contained" color="primary" onClick={() => handleClick()}>
        Add Transaction
      </Button>
    </Grid>
  );
};

export default AddTransaction;

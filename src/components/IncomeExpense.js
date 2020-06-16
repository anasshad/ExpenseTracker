import React, { useContext } from "react";
import { Grid, Paper, Typography, Divider } from "@material-ui/core";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);

  const amount = transactions.map(transaction => transaction.amount);

  const income = amount
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = amount
    .filter(item => item < 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  return (
    <>
      <Paper style={{ padding: "10px" }}>
        <Grid container justify="space-evenly">
          <Grid item>
            <Typography variant="caption">Income</Typography>
            <Typography variant="h6" style={{ color: "green" }}>
              {`$${income}`}
            </Typography>
          </Grid>
          <Divider orientation="vertical" flexItem />

          <Grid item>
            <Typography variant="caption">Expense</Typography>
            <Typography variant="h6" color="error">
              {`$${expense}`}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default IncomeExpense;

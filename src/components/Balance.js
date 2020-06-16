import React, { useContext } from "react";
import { Typography, Grid } from "@material-ui/core";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amount = transactions.map(transaction => transaction.amount);

  const balance = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <Grid container alignItems="flex-start" direction="column">
      <Typography variant="caption">Your Balance</Typography>
      <Typography variant="h6">{`$${balance}`}</Typography>
    </Grid>
  );
};

export default Balance;

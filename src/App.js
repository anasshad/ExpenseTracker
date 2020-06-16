import React from "react";
import { Grid } from "@material-ui/core";

import "./styles.css";

import { GlobalProvider } from "./context/GlobalState";

import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";

export default function App() {
  return (
    <GlobalProvider>
      <Grid container direction="column" alignItems="center">
        <Grid item sm={12} md={3}>
          <Header />
          <Balance />
          <IncomeExpense />
          <TransactionList />
          <AddTransaction />
        </Grid>
      </Grid>
    </GlobalProvider>
  );
}

import React, { useState, useContext } from "react";
import { Typography, Paper, IconButton, Divider } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { GlobalContext } from "../context/GlobalState";

const TransactionList = () => {
  const context = useContext(GlobalContext);

  const Delete = ({ id }) => (
    <IconButton
      aria-label="delete"
      onClick={() => context.removeTransaction(id)}
    >
      <DeleteIcon fontSize="small" />
    </IconButton>
  );

  const Transaction = ({ id, text, amount }) => {
    const [showDelete, setShowDelete] = useState(false);

    return (
      <Paper
        onMouseEnter={() => setShowDelete(true)}
        onMouseLeave={() => setShowDelete(false)}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "5px 0px",
          height: "50px",
          padding: "0px 20px",
          borderRight: "5px solid",
          borderColor: amount > 0 ? "green" : "red"
        }}
      >
        {showDelete ? <Delete id={id} /> : null}
        <div
          style={{
            display: "flex",
            width: " 100%",
            justifyContent: "space-between",
            marginLeft: "10px"
          }}
        >
          <Typography>{text}</Typography>
          <Typography>{`$${amount}`}</Typography>
        </div>
      </Paper>
    );
  };

  return (
    <>
      <Typography variant="h6">History</Typography>
      <Divider />
      {context.transactions.map((transaction, index) => (
        <Transaction
          key={index}
          id={transaction.id}
          text={transaction.text}
          amount={transaction.amount}
        />
      ))}
    </>
  );
};

export default TransactionList;

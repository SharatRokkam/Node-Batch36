//Common JS
// const express = require("express");
// Module JS
import express from "express";

const app = express();

app.get("/api/quotes", (req, res) => {
  let quotes = [
      {
        id: 1,
        author: "Albert Einstein",
        description:
          "Life is like riding a bicycle. To keep your balance, you must keep moving.",
      },
      {
        id: 2,
        author: "Oscar Wilde",
        description: "Be yourself; everyone else is already taken.",
      },
      {
        id: 3,
        author: "Mahatma Gandhi",
        description: "Be the change that you wish to see in the world.",
      },
      {
        id: 4,
        author: "Mark Twain",
        description: "The secret of getting ahead is getting started.",
      },
      {
        id: 5,
        author: "Eleanor Roosevelt",
        description: "No one can make you feel inferior without your consent.",
      },
      {
        id: 6,
        author: "Walt Disney",
        description:
          "The way to get started is to quit talking and begin doing.",
      },
      {
        id: 7,
        author: "Henry Ford",
        description:
          "Whether you think you can or you think you can’t, you’re right.",
      },
    ];
  

  res.send(quotes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("localhost : 3000");
});

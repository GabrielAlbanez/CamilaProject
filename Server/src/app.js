const express = require("express");
const userRoutes = require("./Routes/userRouter");
const authRoutes = require("./Routes/authRoutes");

const app = express();

app.use(express.json());
app.use("/auth", authRoutes);
app.use("/users", userRoutes);

module.exports = app;

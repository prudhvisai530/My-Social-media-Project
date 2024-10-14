const express = require("express");
const app = express();
app.use(express.json());

const mongoose = require("mongoose");
const env = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

const user = require("./Routes/user");
const auth = require("./Routes/auth");

env.config();
const port = process.env.port || 3000;

mongoose
  .connect(process.env.MONGO_DB_URL, {})
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error", err);
  });

app.use(helmet());
app.use(morgan("combined"));

app.use("/api/user", user);
app.use("/api/auth", auth);

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});

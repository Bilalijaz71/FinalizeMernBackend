const express = require("express");
const { errorhandling } = require("./middleware/error");
const helmet = require("helmet");
const dotenv = require("dotenv").config();
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
const cors = require("cors");
const hsts = require("hsts");
app.use(cors());
mongoose.connect(
  "mongodb+srv://test123:test123@nextbridge.hrxuqto.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    dbName: "playground",
  }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

const hstsMiddleware = hsts({
  maxAge: 1234000,
});

app.use((req, res, next) => {
  if (req.secure) {
    hstsMiddleware(req, res, next);
  } else {
    next();
  }
});
app.use("/api/Cart", require("./Routes/CartRoute"));
app.use("/api/user", require("./Routes/UserRoutes"));
app.use("/api/Products", require("./Routes/Products"));

app.use(errorhandling);
app.listen(port, () => console.log(`Server start on port ${port}`));

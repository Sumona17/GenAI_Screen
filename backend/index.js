const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const cors = require("cors");
const { routes } = require("./modules/router/route");
const dotenv = require("dotenv");
dotenv.config();
const portNumber = process.env.BACKEND_PORT;
app.use(bodyParser.json({ limit: "10mb" }));
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);

app.get("/", (req, res) => {
  res.json({ Info: "API Endpoint is Running" });
});

app.listen(portNumber, () => {
  console.log("portNumber" + portNumber);
});

app.use("/common", routes);

app.use("/images", express.static("public/images"));
app.use(express.static("files"));

app.get("/", (req, res) => {
  console.log(req, originalUrl);
  const url = req.protocol + "://" + req.get("host") + req.originalUrl;
  console.log(`The backend is running on ${url}`);
});
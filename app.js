//create express server and set up port
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

//set up cors
const cors = require("cors");
app.use(cors());

//create routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  `Server is listening on port ${port}`;
});

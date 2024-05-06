const express = require("express");
const cors = require("cors");
const router = require("./route/index")
const app = express();

require("./DB/Connection")

app.use(cors());
app.use(express.json());

app.use("/api", router);

app.use("/test", (req, res) => {
  console.log("Test request recieved");
  res.json({ status: 200, data: "Response recieved Successfully" });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`App started successfully at ${PORT}`);
});

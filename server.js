const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const bodyparser = require("body-parser");
const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(bodyparser.json());

app.use("/", require("./routes/home"));
app.use("/documentation", require("./routes/documentation"));
app.use("/v1/list", require("./routes/list"));
app.use("/v1/video", require("./routes/video"));




app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

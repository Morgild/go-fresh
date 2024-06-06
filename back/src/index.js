const express = require("express");
const cors = require("cors");
const foodRoutes = require("./food/routes");
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/api/v1/", foodRoutes);
app.listen(port, () => console.log(`listening on port ${port}`));

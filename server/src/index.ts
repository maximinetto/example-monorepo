import express from "express";
import { jaja } from "utils/pepe";

const app = express();

app.listen(3000, () => {
  console.log("Server on port 3000");
  jaja();
});
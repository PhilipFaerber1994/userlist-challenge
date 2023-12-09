import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

import v1UserRoute from "./src/routes/userRoute";

const app = express();

app.use(bodyParser.json());

const PORT = 3000;

app.use("/api/v1/user/", v1UserRoute);

mongoose
  .connect(
    "mongodb+srv://philip_faerber:Test_1234@cluster0.kw55p1b.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(PORT, () => {
      console.log("App is listening on Port " + PORT);
    });
  })
  .catch((error: any) => {
    console.error("MongoDB connection error:", error);
  });

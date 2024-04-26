// const express = require('express')
import express from "express";
import Hello from "./Hello.js";
import Lab5 from "./Lab5.js";
import cors from "cors";
import CourseRoutes from "./Kanbas/courses/routes.js";
import ModuleRoutes from "./Kanbas/modules/routes.js";
import AssignmentRoutes from "./Kanbas/assignments/routes.js";
import UserRoutes from "./Users/routes.js";
import mongoose from "mongoose";
import "dotenv/config";
import session from "express-session";
const CONNECTION_STRING =
  process.env.DB_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kanbas";

const DB_NAME = process.env.DB_NAME || "kanbas";
//
mongoose
  .connect(CONNECTION_STRING, { dbName: DB_NAME })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

// mongoose
// .connect("mongodb://127.0.0.1:27017/kanbas")
// .then(() => {
// console.log("Connected to MongoDB");
// })
// .catch((err) => {
// console.error("Error connecting to MongoDB:", err);
// });

const app = express();
app.use(
  cors({
    credentials: true,
    origin: [process.env.FRONTEND_URL],
  })
);
const sessionOptions = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
    domain: process.env.HTTP_SERVER_DOMAIN,
  };
}
app.use(session(sessionOptions));
app.use(express.json());
CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
Hello(app);
Lab5(app);
UserRoutes(app);

app.listen(process.env.PORT || 4000, function () {
  console.log("Express server listening on port 4000");
});

// const db = mongoose.connection;
// db.on("connected", () => {
// console.log("Connected to MongoDB");
// });
//
// db.on("error", (error) => {
// console.error("MongoDB connection error:", error);
// });
//
// db.on("disconnected", () => {
// console.log("MongoDB disconnected");
// });
//
// console.log(process.env.CONNECTION_STRING);

import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import UserRoutes from "./src/routes/User.js";
import FoodRoutes from "./src/routes/User.js";
import MealRoutes from "./src/routes/Meal.js";

dotenv.config();

const app = express();
const allowedOrigins = ["http://localhost:5173", process.env.CLIENT_URL, process.env.CLIENT_URL_1, "http://52.202.131.163:5000"];

const corsOptions = {
  origin: (origin, callback) => {
    // Check if the incoming origin is in the list of allowed origins
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // for form data

app.use("/api/user/", UserRoutes);
app.use("/api/food", FoodRoutes);
app.use("/api/meals", MealRoutes);
app.get("/", async (req, res) => {
  res.status(200).json({
    message: "Hello, from Team!!",
  });
});

const connectDB = () => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(process.env.mongo_url)
    .then(() => console.log("Connected to Mongo DB Atlas"))
    .catch((err) => {
      console.error("failed to connect with mongo");
      console.error(err);
    });
};
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

const startServer = async () => {
  try {
    connectDB();
    const port = process.env.PORT || 5000;  // Use the port from .env or default to 5000
    app.listen(port, '0.0.0.0', () => console.log(`Server started on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

startServer();

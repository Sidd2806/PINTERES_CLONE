import express from "express";
import "dotenv/config";
import cors from "cors"
import userRouter from "./routes/user.routes.js";  
import boardRouter from "./routes/board.routes.js";  
import commentRouter from "./routes/comment.routes.js";  
import pinRouter from "./routes/pin.routes.js";  
import connectDB from "./utils/connectDB.js";
import cookieParser  from "cookie-parser";
import fileUpload from "express-fileupload"
const app = express();    


app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true
})); 
app.use(cookieParser());
app.use(express.json())
app.use(fileUpload());


app.use("/users", userRouter);
app.use("/boards", boardRouter);
app.use("/comments", commentRouter);
app.use("/pins", pinRouter);

app.use("/test", (req, res) => {
    return res.json("Hello from backend API");
});

app.listen(3000, () => {
    connectDB()
    console.log("Server is Fine nice one");
});

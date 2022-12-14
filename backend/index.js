import express,{json} from "express";
import workoutRoutes from "./routes/workouts.js"
import {} from 'dotenv/config';
import mongoose from "mongoose";
// express app
const app = express();

//import PORT AND URI
const PORT = process.env.PORT;
const MONGO_URI= process.env.MONGO_URI;

//middlewear
app.use(json());

app.use((req,res,next)=>{
    console.log(req.path, req.method)
    next()
})

//Routes
app.use("/api/workouts", workoutRoutes)

//Connect db
mongoose.connect(MONGO_URI)
.then(()=>{
    //listen
app.listen(PORT,()=>{
    console.log(`connected to db and listening on port ${PORT}`)
})
})
.catch((error)=>{
    console.log(error)
})

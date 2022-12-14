import express,{json} from "express";
import workoutRoutes from "./routes/workouts.js"
import {} from 'dotenv/config';
// express app
const app = express();

//import PORT AND URI
const PORT = process.env.PORT;
const DB_URI= process.env.DB_URI;

//middlewear
app.use(json());

app.use((req,res,next)=>{
    console.log(req.path, req.method)
    next()
})

//Routes
app.use("/api/workouts", workoutRoutes)

//listen
app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
})
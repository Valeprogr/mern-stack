import { Router } from "express";
import Workout from "../models/Workout.js"

const router = new Router();

//GET all workouts
router.get("/", (req,res)=>{
res.json({message: "GET all workouts"})
})

//GET a single workout
router.get("/:id",(req,res)=>{
    res.json({message: "GET a single workout"})
})

//POST  a new workout 
router.post("/", (req,res)=>{
    const {title, reps, load} =req.body;
    try{
        const workout = Workout.create({title,load,reps})
        res.status(200).json(workout);
    }catch(error){
        res.status(400).json({error: error.message})
    }
})

//EDIT  a workout 
router.put("/:id", (req,res)=>{
    res.json({message: "EDIT a new Workout"})
})

//DELETE  a workout 
router.delete("/:id", (req,res)=>{
    res.json({message: "DELETE a new Workout"})
})
export default router;
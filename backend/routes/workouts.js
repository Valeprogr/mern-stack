import { Router } from "express";


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
    req.body
    res.json({message: "POST a new Workout"})
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
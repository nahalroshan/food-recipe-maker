
import cors from 'cors';//communication with front end and backend
import mongoose from 'mongoose';
import express from 'express';

const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb+srv://nahalroshan5:nahalroshanmessi@recipes.tjkeirw.mongodb.net/recipes?retryWrites=true&w=majority")




app.listen(3001,()=>{
    console.log("Server started");
})

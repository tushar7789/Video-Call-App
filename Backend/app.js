import express  from 'express';
import mongoose from 'mongoose';
import { PORT, mongoDBURL } from './config.js';
import {Users} from "./src/models/usersModel.js";

const app = express();

app.get('/home', (req, res) => {
  res.send("chal raha hai");
});

app.post('/user', async (req, res) => {
  try { 
    if(!request.body.username){
      res.status(400).send({
        'message': 'provide user name'
      })
    }

    const newUser = {
      username : req.body.username
    }

    const user = await Users.create(newUser);

   return res.status(201).send(user);
  } catch(error) {
    console.log(error);
  }
})

mongoose.connect(mongoDBURL)
.then(() => {
  console.log("connected to database succesfuly");
    
  app.listen(PORT, () => {
    console.log(`how is it going ${PORT}`);
  });

}).catch((error) => {
  console.log(error);
})
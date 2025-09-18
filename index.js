import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import usersRoutes from './routes/users.js';

const app = express();
const PORT= 5000;

mongoose.connect("mongodb://localhost:27017/mydatabase")
  .then(() => console.log(" MongoDB Connected"))
  .catch(err => console.error(err));


app.use(bodyParser.json());

app.use('/users', usersRoutes);

app.get('/', (req, res)=>res.send("Here is the homepage"));

app.listen(PORT, ()=> console.log(`Server is Running on port: http://localhost:${PORT}`));

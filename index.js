import express from'express';
import bodyParser from 'body-parser';
const PORT = 5000;
import userRoutes from './routes/users.js';
const app = express();


app.use(bodyParser.json());

app.use('/users',userRoutes);

app.get('/',(req,res)=>{
    res.send('Hello from Dhruv!');
});

app.listen(PORT,()=>console.log(`Server is running on port: http://localhost:${PORT}`));
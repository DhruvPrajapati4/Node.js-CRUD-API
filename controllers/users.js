import {v4 as uuidv4} from 'uuid';

let users = [];

export const getUser = (req,res)=>{
    console.log(users);
    res.send(users);
}

export const createUser = (req,res)=>{
    //we can only make get requests from browser
    // to test our API we need another software
    console.log('POST ROUTE REACHED');
    const user = req.body;
    const userWithID = {...user,id: uuidv4()};
    users.push(userWithID);
    res.send(`User with the name ${user.firstName} is added to the database`);
}

export const findUser = (req,res)=>{
    const {id} = req.params;
    const foundUser = users.find((user)=> user.id === id);
    res.send(foundUser);
}

export const deleteUser = (req,res)=>{
    const { id } = req.params;
    users = users.filter((user) => user.id != id); 
    res.send(`user with id:${id} is deleted from the database`);
}

export const patchUser = (req,res)=>{
    const { id } = req.params;
    const {firstName, lastName, age} = req.body;
    const user = users.find((user)=>user.id==id);
    if(firstName) user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    if(age) user.age = age;
    
    res.send(`user with id:${id} has been updated.`);
}

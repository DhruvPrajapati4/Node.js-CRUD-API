import express from 'express';
import {getUser,createUser,findUser,deleteUser,patchUser} from '../controllers/users.js';
const router = express.Router();

router.get('/',getUser);

router.post('/',createUser);

router.get('/:id',findUser);

router.delete('/:id',deleteUser);

router.patch('/:id',patchUser); //partially update an user

export default router;

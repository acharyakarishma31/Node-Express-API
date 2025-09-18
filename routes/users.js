import express from 'express';

import { createUser, getUser, getUserById,  deleteUser, updateUser } from '../controllers/users.js';


const router = express.Router();


// all the routes here are starting using /users, then whatever we adding to the path
router.get('/',getUser);

router.post('/',createUser);

router.get('/:id', getUserById);

router.delete('/:id',deleteUser);

router.patch('/:id',updateUser);

export default router;
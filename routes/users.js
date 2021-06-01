import express from 'express'


import { createUser, getUser, getSingleUser, deleteUser, updateUser } from '../controllers/users.js'
const router = express.Router()

// all routes in here are starting with /users

router.get('/', getUser)

router.post('/', createUser)

router.get('/:id', getSingleUser)

router.delete('/:id', deleteUser)

router.patch('/:id', updateUser)

export default router
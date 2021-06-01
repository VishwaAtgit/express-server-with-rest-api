import {v4 as uuidv4} from 'uuid';

let users = [
    {
        firstName: "Vishwashree",
        lastName: "challa",
        age: 27
    },
    {
        firstName: "Vishwa",
        lastName: "C",
        age: 26
    }
]

export const createUser = (req, res) => {
    users.push({...req.body, id: uuidv4()})
    res.send(users)
}
export const getUser = (req, res) => {
    res.send(users)
}
export const getSingleUser = (req, res) => {
    const expectedUser = users.find(user => user.id === req.params.id)
    res.send(expectedUser)
}

export const deleteUser = (req, res) => {
    users = users.filter(user => user.id !== req.params.id)
    res.send('deleted')
}

export const updateUser = (req, res) => {
    const user = users.find(user => user.id === req.params.id)
    const {firstName, lastName, age} = req.body

    if(firstName) user.firstName = firstName
    if(lastName) user.lastName = lastName
    if(age) user.age = age
    
    res.send('updated')
}
import { Request, Response } from 'express';



const Todos = [
    {
        Todo_id: 1,
        Todo_name: "Todo 1",
        Todo_description: "Todo 1 description",
        Todo_time: new Date(),
        number_of_love: 0
    }
    , {
        Todo_id: 2,
        Todo_name: "Todo 2",
        Todo_description: "Todo 2 description",
        Todo_time: new Date(),
        number_of_love: 0
    }, {
        Todo_id: 3,
        Todo_name: "Todo 3",
        Todo_description: "Todo 3 description",
        Todo_time: new Date(),
        number_of_love: 0
    }
]
const getAllTodos = (req: Request, res: Response) => {
    try {
        res.status(201).send(Todos);
    }
    catch (error) {
        res.status(500).send({ message: "Failed", status: false });
    }
}

const updateTodo = (req: Request, res: Response) => {

}

const deleteTodo = (req: Request, res: Response) => {

}

const createTodo = (req: Request, res: Response) => {

}

export default {
    getAllTodos,
    updateTodo,
    deleteTodo,
    createTodo
}
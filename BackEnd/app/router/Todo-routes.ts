import express, { Router }  from "express";
import TodoController from "../controller/Todo-controller";

const router : Router = express.Router();

router.get("/api/todos", TodoController.getAllTodos );

export default router;

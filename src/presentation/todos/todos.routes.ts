import { Router } from "express";
import { TodosController } from "./controller";
import { TodoDataSourceImpl } from "../../it/datasource/todo.datasource.impl";
import { TodoRepositoryImpl } from "../../it/repositories/todo.repository.impl";

export class    TodosRoutes {
  static get routes(): Router {
    const router = Router();


    const datasource= new TodoDataSourceImpl();
    const todoRepository = new TodoRepositoryImpl( datasource);

    const todoController = new TodosController(todoRepository);

    router.get("/", (req, resp) => todoController.getTodos(req, resp));

    router.get("/:id", todoController.getTodoById);
 
    router.post("/", todoController.createTodo);

    router.put("/:id" , todoController.updateTodo);

    router.delete("/:id", todoController.deleteTodo);
     
    return router;
  }
}

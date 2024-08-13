import { Router } from "express";
import { TodosController } from "./todos/controller";
import { TodosRoutes } from "./todos/todos.routes";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();


    router.use("/api/todos", TodosRoutes.routes);

    return router;
  }
}

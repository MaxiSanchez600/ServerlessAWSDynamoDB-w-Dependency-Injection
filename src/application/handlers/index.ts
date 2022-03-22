import databaseClient from "src/infrastructure/services/database";
import tasksRepository from "src/infrastructure/repositories/tasksRepository";
import taskService from "src/domain/services/taskService";
import * as getHandler from "./getTasks/handler";

const client = new databaseClient();
const repository = new tasksRepository(client.getDatabaseClient());
const service = new taskService(repository);

getHandler.setTasksService(service);
const getTasks = getHandler.getTasksHandler;

export { getTasks };

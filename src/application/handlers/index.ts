import databaseClient from "src/infrastructure/services/database";
import tasksRepository from "src/infrastructure/repositories/tasksRepository";
import taskService from "src/domain/services/taskService";
import * as getHandler from "./getTasks/handler";
import * as postHandler from "./addTask/handler";

// Creating the database client
const client = new databaseClient();

// Injecting the DB client in the repository
const repository = new tasksRepository(client.getDatabaseClient());

// Injecting the repository in the service
const service = new taskService(repository);

// Injecting the service in the handlers / controllers
postHandler.setTasksService(service);
getHandler.setTasksService(service);

const addTask = postHandler.addTaskHandler;
const getTasks = getHandler.getTasksHandler;

// Exporting the handlers
export { getTasks, addTask };

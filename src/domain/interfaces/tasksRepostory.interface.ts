import { DocumentClient } from "aws-sdk/clients/dynamodb";
import { Task } from "../schemas/taskSchema";

export default interface tasksRepositoryInterface {
  docClient: DocumentClient;
  getTasks: () => Promise<Task[]>;
  addTask: (newTask: Task) => Promise<Task>;
}

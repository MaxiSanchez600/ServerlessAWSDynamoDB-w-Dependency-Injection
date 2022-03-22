import { addTaskDTO } from "src/application/dtos/addTask";
import { Task } from "../schemas/taskSchema";
import tasksRepositoryInterface from "./tasksRepostory.interface";

export default interface tasksServiceInterface {
  tasksRepository: tasksRepositoryInterface;
  getTasks: () => Promise<Task[]>;
  addTask: (addTaskDto: addTaskDTO) => Promise<Task>;
}

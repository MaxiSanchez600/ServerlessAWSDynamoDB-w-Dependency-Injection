import { Task } from "../schemas/taskSchema";
import tasksRepositoryInterface from "./tasksRepostory.interface";

export default interface tasksServiceInterface {
  tasksRepository: tasksRepositoryInterface;
  getTasks: () => Promise<Task[]>;
}

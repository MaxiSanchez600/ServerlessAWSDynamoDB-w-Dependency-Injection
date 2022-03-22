import { addTaskDTO } from "src/application/dtos/addTask";
import tasksRepositoryInterface from "../interfaces/tasksRepostory.interface";
import { Task } from "../schemas/taskSchema";
import { v4 } from "uuid";
export default class taskService {
  constructor(public tasksRepository: tasksRepositoryInterface) {}

  async getTasks(): Promise<Task[]> {
    try {
      const response = await this.tasksRepository.getTasks();
      return response;
    } catch (e) {
      throw e;
    }
  }

  async addTask(addTaskDto: addTaskDTO): Promise<Task> {
    const createdAt = new Date();
    const id = v4();

    const newTask: Task = {
      title: addTaskDto.title,
      description: addTaskDto.description,
      createdAt,
      id,
    };

    try {
      const response = await this.tasksRepository.addTask(newTask);
      return response;
    } catch (e) {
      throw e;
    }
  }
}

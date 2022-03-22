import tasksRepositoryInterface from "../interfaces/tasksRepostory.interface";
import { Task } from "../schemas/taskSchema";

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
}

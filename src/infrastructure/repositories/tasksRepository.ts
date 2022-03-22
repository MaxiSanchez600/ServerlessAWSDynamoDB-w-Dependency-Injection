import { DocumentClient } from "aws-sdk/clients/dynamodb";
import { Task } from "src/domain/schemas/taskSchema";

export default class tasksRepository {
  constructor(public docClient: DocumentClient) {}

  async getTasks(): Promise<Task[]> {
    try {
      const result = await this.docClient
        .scan({ TableName: "TaskTable" })
        .promise();

      if (result.$response.httpResponse.statusCode !== 200) {
        // Handle DynamoDB / AWS errors that dont throw errors
        throw new Error(JSON.stringify(result.$response.httpResponse));
      } else {
        const tasks = result.Items;
        return tasks as Task[];
      }
    } catch (e) {
      throw e;
    }
  }

  async addTask(newTask: Task): Promise<Task> {
    try {
      const result = await this.docClient
        .put({
          TableName: "TaskTable",
          Item: newTask,
        })
        .promise();

      if (result.$response.httpResponse.statusCode !== 200) {
        // Handle DynamoDB / AWS errors that dont throw errors
        throw new Error(JSON.stringify(result.$response.httpResponse));
      } else {
        return newTask;
      }
    } catch (e) {
      throw e;
    }
  }
}

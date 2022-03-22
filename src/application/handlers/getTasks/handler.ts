import { middyfy } from "@libs/lambda";
import { Errors } from "src/application/enums/errors";
import { Messages } from "src/application/enums/messages";
import { handleError, Responses } from "src/application/helpers/apiResponses";
import tasksServiceInterface from "src/domain/interfaces/tasksService.interface";

let tasksService: tasksServiceInterface;

export const setTasksService = (service: tasksServiceInterface) => {
  tasksService = service;
};

const getTasks = async () => {
  // Check for Injected Service dependency
  if (!tasksService) {
    return Responses._500({ data: {}, message: Errors.DEP_FAILED });
  }

  // Get tasks from tasksService
  try {
    const tasks = await tasksService.getTasks();
    return Responses._200({ data: tasks, message: Messages.GET_TASKS });
  } catch (e) {
    return handleError(e);
  }
};

export const getTasksHandler = middyfy(getTasks);

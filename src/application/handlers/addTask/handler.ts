import { middyfy } from "@libs/lambda";
import { Errors } from "src/application/enums/errors";
import { Messages } from "src/application/enums/messages";
import { handleError, Responses } from "src/application/helpers/apiResponses";
import { addTaskValidator } from "src/application/helpers/validations/addTaskValidator";
import tasksServiceInterface from "src/domain/interfaces/tasksService.interface";

let tasksService: tasksServiceInterface;

export const setTasksService = (service: tasksServiceInterface) => {
  tasksService = service;
};

const addTask = async (event) => {
  // Check for Injected Service dependency
  if (!tasksService) {
    return Responses._500({ data: {}, message: Errors.DEP_FAILED });
  }

  // Validate body request
  const newTask = addTaskValidator(event.body);
  if (!newTask) {
    return Responses._400({ data: {}, message: Errors.INVALID_REQUEST });
  }

  // Create new task from TasksService
  try {
    const createdTask = await tasksService.addTask(newTask);
    return Responses._200({ data: createdTask, message: Messages.ADD_TASK });
  } catch (e) {
    return handleError(e);
  }
};

export const addTaskHandler = middyfy(addTask);

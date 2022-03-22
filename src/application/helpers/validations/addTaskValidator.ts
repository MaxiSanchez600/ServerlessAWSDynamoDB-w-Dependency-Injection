import { addTaskDTO } from "../../dtos/addTask";

export const addTaskValidator = (arg: any): addTaskDTO | null => {
  return arg &&
    arg.title &&
    typeof arg.title == "string" &&
    arg.description &&
    typeof arg.description == "string" &&
    arg.title.length > 5 &&
    arg.description.length > 20
    ? (arg as addTaskDTO)
    : null;
};

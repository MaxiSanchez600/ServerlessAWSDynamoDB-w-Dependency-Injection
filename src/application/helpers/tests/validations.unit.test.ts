import { addTaskDTO } from "src/application/dtos/addTask";
import { addTaskValidator } from "../validations/addTaskValidator";

describe("Should validate DTO correctly", () => {
  it("Should return addTask DTO if param is DTO", () => {
    const arg: addTaskDTO = {
      title: "a new task title",
      description: "a new task description",
    };
    expect(addTaskValidator(arg)).toBe(arg);
  });
  it("Should return null if param is not DTO or not valid", () => {
    const badArg = {
      title: "a new task title",
    };
    expect(addTaskValidator(badArg)).toBe(null);
  });
});

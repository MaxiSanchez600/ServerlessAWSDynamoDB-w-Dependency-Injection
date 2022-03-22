import schema from "../../dtos/addTask";
import { handlerPath } from "@libs/handler-resolver";

export default {
  handler: `${handlerPath(__dirname)}/handler.addTaskHandler`,
  events: [
    {
      http: {
        method: "post",
        path: "tasks",
        request: {
          schemas: {
            "application/json": schema,
          },
        },
      },
    },
  ],
};

import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import { Errors } from "src/application/enums/errors";
import { Messages } from "src/application/enums/messages";
import { Responses } from "src/application/helpers/apiResponses";
import schema from "../../dtos/addTask";

const addTask: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
  event
) => {
  if (!event.body.name) {
    return Responses._400({ data: {}, message: Errors.INVALID_REQUEST });
  }
  return Responses._200({
    data: { name: event.body.name },
    message: Messages.ADD_TASK,
  });
};

export const addTaskHandler = middyfy(addTask);

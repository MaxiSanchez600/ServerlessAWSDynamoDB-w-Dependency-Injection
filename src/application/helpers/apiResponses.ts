type Data = {
  data: {};
  message: string;
};

export type serverlessResponse = {
  statusCode: number;
  body: string;
};
export const Responses = {
  _defineResponse(statusCode: number, data: Data): serverlessResponse {
    return {
      statusCode: statusCode,
      body: JSON.stringify(data),
    };
  },
  _200(data: Data): serverlessResponse {
    return this._defineResponse(200, data);
  },
  _400(data: Data): serverlessResponse {
    return this._defineResponse(400, data);
  },
  _401(data: Data): serverlessResponse {
    return this._defineResponse(401, data);
  },
  _403(data: Data): serverlessResponse {
    return this._defineResponse(403, data);
  },
  _500(data: Data): serverlessResponse {
    return this._defineResponse(500, data);
  },
  _Custom(data: Data, statusCode: number): serverlessResponse {
    return this._defineResponse(statusCode, data);
  },
};

export const handleError = (e: any): serverlessResponse => {
  if (e.statusCode) {
    // Handling errors from database / AWS that mostly come with statusCode and a message
    return Responses._Custom(
      { data: {}, message: e ? e.message : e },
      e.statusCode
    );
  } else {
    // Handling possible errors without statusCode and message that wont go through
    return Responses._500({ data: {}, message: e });
  }
};

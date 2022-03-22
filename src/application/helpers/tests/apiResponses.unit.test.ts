import { Responses, handleError } from "../apiResponses";

describe("Check helpers responses types", () => {
  it("Responses is an object", () => {
    expect(typeof Responses).toBe("object");
  });
  it("handleError is a function", () => {
    expect(typeof handleError).toBe("function");
  });
});

describe("Responses methods should return the correct data", () => {
  it("Should return statusCode 200 with the provided data", () => {
    const mockedData = { data: { name: "max" }, message: "mockedMessage" };
    const res = Responses._200(mockedData);
    expect(res.statusCode).toBe(200);
    expect(res.body).toBe(JSON.stringify(mockedData));
  });
  it("Should return statusCode 400 with the provided data", () => {
    const mockedData = { data: { name: "max" }, message: "mockedMessage" };
    const res = Responses._400(mockedData);
    expect(res.statusCode).toBe(400);
    expect(res.body).toBe(JSON.stringify(mockedData));
  });
  it("Should return statusCode 401 with the provided data", () => {
    const mockedData = { data: { name: "max" }, message: "mockedMessage" };
    const res = Responses._401(mockedData);
    expect(res.statusCode).toBe(401);
    expect(res.body).toBe(JSON.stringify(mockedData));
  });
  it("Should return statusCode 403 with the provided data", () => {
    const mockedData = { data: { name: "max" }, message: "mockedMessage" };
    const res = Responses._403(mockedData);
    expect(res.statusCode).toBe(403);
    expect(res.body).toBe(JSON.stringify(mockedData));
  });
  it("Should return statusCode 500 with the provided data", () => {
    const mockedData = { data: { name: "max" }, message: "mockedMessage" };
    const res = Responses._500(mockedData);
    expect(res.statusCode).toBe(500);
    expect(res.body).toBe(JSON.stringify(mockedData));
  });
  it("Should return the provided statusCode with the provided data", () => {
    const mockedData = { data: { name: "max" }, message: "mockedMessage" };
    const res = Responses._Custom(mockedData, 201);
    expect(res.statusCode).toBe(201);
    expect(res.body).toBe(JSON.stringify(mockedData));
  });
});

describe("HandleError function should return the correct statusCode and data", () => {
  it("Should return the provided statusCode and message if properties exists", () => {
    const mockedData = { statusCode: 500, message: "mockedMessage" };
    const res = handleError(mockedData);
    expect(res.statusCode).toBe(500);
    expect(res.body).toBe(
      JSON.stringify({ data: {}, message: mockedData.message })
    );
  });
  it("Should return statusCode 500 if not provided", () => {
    const mockedData = "something exploted";
    const res = handleError(mockedData);
    expect(res.statusCode).toBe(500);
    expect(res.body).toBe(JSON.stringify({ data: {}, message: mockedData }));
  });
});

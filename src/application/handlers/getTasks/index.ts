export default {
  handler: `src/application/handlers/index.getTasks`,
  events: [
    {
      http: {
        method: "get",
        path: "tasks",
      },
    },
  ],
};

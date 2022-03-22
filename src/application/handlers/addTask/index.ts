export default {
  handler: `src/application/handlers/index.addTask`,
  events: [
    {
      http: {
        method: "post",
        path: "tasks",
      },
    },
  ],
};

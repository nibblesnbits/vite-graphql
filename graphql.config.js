export default {
  projects: {
    self: {
      schema: [
        "./schema.graphql",
        "./relay-compiler-directives-v10.0.1.graphql",
      ],
      documents: ["src/**/*.{graphql,js,ts,jsx,tsx}"],
    },
  },
};

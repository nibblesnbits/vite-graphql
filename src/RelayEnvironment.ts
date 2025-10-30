import {
  Environment,
  Network,
  RecordSource,
  Store,
  type FetchFunction,
} from "relay-runtime";

import GraphQLApiError from "./GraphQLApiError";
import NetworkError from "./NetworkError";

const fetchQuery: FetchFunction = async (operation, variables) => {
  try {
    const response = await fetch(`https://graphql.org/graphql/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: operation.text,
        variables,
      }),
    });
    if (response.status === 401) {
      location.href = "/login";
      return {
        data: { errors: [{ message: "unauthorized" }] },
      };
    }
    const json = await response.json();
    if (json.errors) {
      console.error("GraphQL Error:", json.errors);
      // throw new GraphQLApiError(json.errors);
    }
    return json;
  } catch (err) {
    console.error("Fetch Error:", err);
    if (err instanceof GraphQLApiError) {
      throw err;
    }
    throw new NetworkError("We can't reach the internet!");
  }
};

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});

export default environment;

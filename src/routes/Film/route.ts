import { type RouteDefinition } from "@/Router/withRelay";
import Query, { type FilmQuery } from "./__generated__/FilmQuery.graphql";
import FilmPage, { FilmQueryDef } from ".";

export default {
  path: "/film/:id?",
  component: FilmPage,
  gqlQuery: FilmQueryDef,
  query: Query,
} satisfies RouteDefinition<FilmQuery>;

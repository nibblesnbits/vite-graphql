import { type RouteDefinition } from "@/Router/withRelay";
import Query, { type FilmQuery } from "./__generated__/FilmQuery.graphql";
import { FilmQueryDef } from "./FilmQuery";
import { lazy } from "react";

export default {
  path: "/film/:id?",
  component: lazy(() => import(".")),
  gqlQuery: FilmQueryDef,
  query: Query,
} satisfies RouteDefinition<FilmQuery>;

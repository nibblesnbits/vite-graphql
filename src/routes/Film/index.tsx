import { graphql } from "react-relay";
import { type RelayRoute } from "@/Router/withRelay";
import type { FilmQuery } from "./__generated__/FilmQuery.graphql";
import Film from "@/components/Film";

export const FilmQueryDef = graphql`
  query FilmQuery($id: ID!) {
    film(id: $id) {
      id
      title
      ...Film_item
    }
  }
`;

export default function FilmPage({ data }: Readonly<RelayRoute<FilmQuery>>) {
  return (
    <div>
      <h1>{data.film?.title}</h1>
      {data.film && <Film film={data.film} />}
    </div>
  );
}

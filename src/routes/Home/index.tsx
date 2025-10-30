import { graphql } from "react-relay";
import { type RelayRoute } from "@/Router/withRelay";
import type { HomeQuery } from "./__generated__/HomeQuery.graphql";
import Film from "@/components/Film";

export const HomeQueryDef = graphql`
  query HomeQuery {
    allFilms {
      films {
        id
        ...Film_item
      }
    }
  }
`;

export default function HomePage({ data }: Readonly<RelayRoute<HomeQuery>>) {
  const films = data?.allFilms?.films?.filter((film) => film != null);

  return (
    <div>
      <h1>Star Wars Films</h1>
      {films?.map((film) => (
        <li key={film.id}>
          <Film film={film} />
        </li>
      ))}
    </div>
  );
}

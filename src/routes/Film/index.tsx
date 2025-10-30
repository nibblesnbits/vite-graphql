import { type RelayRoute } from "@/Router/withRelay";
import type { FilmQuery } from "./__generated__/FilmQuery.graphql";
import FilmDetails from "@/components/FilmDetails";

export default function FilmPage({ data }: Readonly<RelayRoute<FilmQuery>>) {
  return (
    <div>
      <h1>{data.film?.title}</h1>
      {data.film && <FilmDetails film={data.film} />}
    </div>
  );
}

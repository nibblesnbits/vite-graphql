import { type RelayRoute } from "@/Router/withRelay";
import type { FilmQuery } from "./__generated__/FilmQuery.graphql";
import Film from "@/components/Film";

export default function FilmPage({ data }: Readonly<RelayRoute<FilmQuery>>) {
  return (
    <div>
      <h1>{data.film?.title}</h1>
      {data.film && <Film film={data.film} />}
    </div>
  );
}

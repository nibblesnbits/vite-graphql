import { type RelayRoute } from "@/Router/withRelay";
import type { HomeQuery } from "./__generated__/HomeQuery.graphql";
import Film from "@/components/Film";
import FilmHover from "@/components/FilmHover";
import { Suspense, useState } from "react";

export default function HomePage({ data }: Readonly<RelayRoute<HomeQuery>>) {
  const films = data?.allFilms?.films?.filter((film) => film != null);

  const [clickedFilm, setClickedFilm] = useState<{ id: string } | null>(null);

  const showInfo = (id: string) => () => {
    setClickedFilm({ id });
  };

  return (
    <div>
      <h1>Star Wars Films</h1>
      {films?.map((film) => (
        <li key={film.id}>
          <Film film={film} />
          <button onClick={showInfo(film.id)}>Check me</button>
        </li>
      ))}
      <div>
        {clickedFilm && (
          <Suspense fallback="Loading...">
            <FilmHover id={clickedFilm.id} />
          </Suspense>
        )}
      </div>
    </div>
  );
}

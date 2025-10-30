import "./App.css";

import { type HomeScreenQuery } from "./__generated__/HomeScreenQuery.graphql";
import { graphql, useLazyLoadQuery } from "react-relay";
import Film from "./components/Film";

function HomeScreen() {
  const data = useLazyLoadQuery<HomeScreenQuery>(
    graphql`
      query HomeScreenQuery {
        allFilms {
          films {
            id
            ...Film_item
          }
        }
      }
    `,
    {}
  );

  const films = data?.allFilms?.films?.filter((film) => film != null);

  return (
    <div>
      <h1>Star Wars Films</h1>
      {films?.map((film) => (
        <Film key={film.id} film={film} />
      ))}
    </div>
  );
}

export default HomeScreen;

import { graphql, useFragment } from "react-relay";
import type { Film_item$key } from "./__generated__/Film_item.graphql";
import { Link } from "wouter";

export default function FilmListItem(props: { film: Film_item$key }) {
  const film = useFragment<Film_item$key>(
    graphql`
      fragment Film_item on Film {
        id
        title
        director
      }
    `,
    props.film
  );

  return (
    <>
      <b>
        <Link to={`/film/${film.id}`}>{film.title}</Link>
      </b>
      : directed by <i>{film.director}</i>
    </>
  );
}

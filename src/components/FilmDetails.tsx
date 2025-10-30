import { graphql, usePaginationFragment } from "react-relay";
import type { FilmDetails_film$key } from "./__generated__/FilmDetails_film.graphql";

export default function FilmDetails(props: { film: FilmDetails_film$key }) {
  const { data, loadNext, hasNext } = usePaginationFragment(
    graphql`
      fragment FilmDetails_film on Film
      @argumentDefinitions(
        cursor: { type: "String" }
        count: { type: "Int", defaultValue: 5 }
      )
      @refetchable(queryName: "FilmDetails_film_paginationQuery") {
        id
        characterConnection(after: $cursor, first: $count)
          @connection(key: "FilmDetails_film_characterConnection") {
          edges {
            cursor
            node {
              name
            }
          }
          pageInfo {
            hasNextPage
          }
        }
      }
    `,
    props.film
  );

  return (
    <table>
      <thead>
        <tr>
          <th>
            <em>Characters</em>
          </th>
        </tr>
      </thead>
      <tbody>
        {data.characterConnection?.edges?.map((edge, index) =>
          edge?.node ? (
            <tr key={index}>
              <td>{edge.node.name}</td>
            </tr>
          ) : null
        )}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={2}>
            {hasNext ? (
              <button
                onClick={() => {
                  loadNext(5);
                }}
              >
                Load more characters
              </button>
            ) : (
              "No more characters."
            )}
          </td>
        </tr>
      </tfoot>
    </table>
  );
}

import { graphql, useLazyLoadQuery } from "react-relay";
import type { FilmHoverQuery } from "../routes/Film/__generated__/FilmHoverQuery.graphql";
import Film from "@/components/Film";

export const FilmHoverQueryDef = graphql`
  query FilmHoverQuery($id: ID!) {
    film(id: $id) {
      id
      title
      ...Film_item
    }
  }
`;

type FilmHoverProps = Readonly<{ id: string }>;

export default function FilmHover({ id }: FilmHoverProps) {
  const data = useLazyLoadQuery<FilmHoverQuery>(FilmHoverQueryDef, { id });
  return (
    <div>
      <h1>{data.film?.title}</h1>
      {data.film && <Film film={data.film} />}
    </div>
  );
}

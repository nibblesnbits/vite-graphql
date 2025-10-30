import { graphql } from "relay-runtime";


export const FilmQueryDef = graphql`
  query FilmQuery($id: ID!) {
    film(id: $id) {
      id
      title
      ...Film_item
    }
  }
`;

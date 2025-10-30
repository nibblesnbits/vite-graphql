import { graphql } from "relay-runtime";


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

import { gql } from "@apollo/client";

export const FEED_QUERY = gql`
  {
    feed {
      links {
        id
        url
        createdAt
        description
        postedBy {
          id
          name
        }
        votes {
          id
          user {
            id
          }
        }
      }
    }
  }
`;
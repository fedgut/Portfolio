import { gql } from '@apollo/client';

const GITHUB_QUERY = gql`
  {
    user(login: "fedgut") {
      pinnedItems(first: 6) {
        edges {
          node {
            ... on Repository {
              id
              name
              description
              homepageUrl
              url
            }
          }
        }
      }
    }
  }
`;

export default GITHUB_QUERY;

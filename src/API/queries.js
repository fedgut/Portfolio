import { gql } from '@apollo/client';
// eslint-disable-next-line import/prefer-default-export
export const GITHUB_QUERY = gql`
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

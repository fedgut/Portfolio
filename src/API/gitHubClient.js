import { ApolloClient, InMemoryCache } from '@apollo/client';

const gitHubClient = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
});

export default gitHubClient;

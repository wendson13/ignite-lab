import { ApolloClient, InMemoryCache } from '@apollo/client';

export const Client = new ApolloClient({
  uri: import.meta.env.API_URI,
  cache: new InMemoryCache(),
});
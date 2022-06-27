import { ApolloClient, InMemoryCache } from '@apollo/client';

export const Client = new ApolloClient({
  uri: import.meta.env.VITE_API_URI,
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`
  }
});

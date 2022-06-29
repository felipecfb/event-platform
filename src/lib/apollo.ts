import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4zlqpps0blw01up0e7rhluw/master',
  cache: new InMemoryCache(),
});
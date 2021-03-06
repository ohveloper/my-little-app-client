import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import Continents from "./Continents";
import Test from "./Test";

const client = new ApolloClient({
  link: createHttpLink({ uri: "http://localhost:4000" }),
  // link: createHttpLink({ uri: "https://countries.trevorblades.com" }),
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <h1>React + Apollo Hooks</h1>
      <Continents />
      <Test />
    </ApolloProvider>
  );
}

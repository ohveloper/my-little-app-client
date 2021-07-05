import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const GET_PONG = gql`
  query {
    ping
  }
`;

export default function Test() {
  const { loading, error, data } = useQuery(GET_PONG);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!(</p>;
  return <div>{data.ping}</div>;
}

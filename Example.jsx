/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useQuery } from "react-query";

export default function Example() {
  const { isLoading, error, data, isFetching } = useQuery("repoData", () =>
    fetch(
      "https://api.github.com/repos/arybins/snowdev"
    ).then((res) => res.json())
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{" "}
      <strong>✨ {data.stargazers_count}</strong>{" "}
      <strong>🍴 {data.forks_count}</strong>
      <div>{isFetching ? "Updating..." : ""}</div>
    </div>
  );
}


import client from "@/tina/__generated__/client";
import Link from "next/link";
import React from "react";
import { useTina } from "tinacms/dist/react";

export default function Article(props) {
  const { data } = useTina({
    data: props.data,
    query: props.query,
    variables: props.variables,
  });

  let artiledata = data?.articleConnection?.edges;
  console.log(artiledata);
  return (
    <div>
      {artiledata?.map((article, idx) => (
        <p key={idx}>{article.node.date}</p>
      ))}
    </div>
  );
}

export const getStaticProps = async () => {
  let { data, query, variables } = await client.queries.articleConnection({
    filter: { _sys: { filename: { eq: "mani" } } },
  });

  return {
    props: {
      data,
      query,
      variables,
    },
  };
};

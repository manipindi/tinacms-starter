import client from "@/tina/__generated__/client";
import { Flex } from "@chakra-ui/react";
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
    <Flex flexDir={"column"} gap={"10px"}>
      {artiledata?.map((article, idx) => (
        <Link href={`articles/${article.node.title}`} key={idx}>
          {article.node.title}
        </Link>
      ))}
    </Flex>
  );
}

export const getServerSideProps = async () => {
  let { data, query, variables } = await client.queries.articleConnection();

  return {
    props: {
      data,
      query,
      variables,
    },
  };
};

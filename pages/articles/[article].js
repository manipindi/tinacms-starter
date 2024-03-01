import client from "@/tina/__generated__/client";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function Article({ userData }) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", (url)=>{
      setIsLoading(true)
    });

    router.events.on("routeChangeComplete", (url)=>{
      setIsLoading(false)
    });

    router.events.on("routeChangeError", (url) =>{
      setIsLoading(false)
    });
  }, [router])
  console.log(router.isFallback);
  return <div>{userData?.article?.title}</div>;
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }) => {
  console.log(params, "params");
  const article = params?.article;
  let { data, query, variables } = await client.queries.article({
    relativePath: `${article}.mdx`,
  });
  return {
    props: {
      userData: data,
    },
  };
};

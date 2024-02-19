import React from "react";

export default function Article({ username }) {
  return <div>{username}</div>;
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }) => {
  const article = params?.article;

  return {
    props: {
      username: article,
    },
  };
};

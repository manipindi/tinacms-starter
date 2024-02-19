import React from "react";

export default function Article({ username }) {
  return <div>{username}</div>;
}

// export const getStaticPaths = async () => {
//   return {
//     paths: [],
//     fallback: "blocking",
//   };
// };

export const getServerSideProps = async ({ params }) => {
    console.log(params, "params");
  const article = params?.article;

  return {
    props: {
      username: article,
    },
  };
};

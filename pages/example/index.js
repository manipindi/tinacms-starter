import { GET_PROFILE } from "@/domain/example/queries";
import client from "@/tina/__generated__/client";
import React from "react";

export default function Example(props) {
  let profileData = props?.data?.data?.profileConnection?.edges;
  console.log(profileData);
  return (
    <div>
      {profileData?.length &&
        profileData.map((profile) => <h1>{profile.node.designation}</h1>)}
    </div>
  );
}

export const getStaticProps = async () => {
  let data = await client.request({ query: GET_PROFILE });

  return {
    props: {
      data,
    },
  };
};

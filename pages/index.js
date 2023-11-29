import client from "@/tina/__generated__/client";
import styles from "./index.module.scss";
import { useTina } from "tinacms/dist/react";
import { useQuery } from "@apollo/client";
import { GET_PROFILE } from "@/gqlops";
import { UploadPDF } from "@/tina-components/upload";

export default function Home(props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const profileData = data?.profile

  return (
    <div className={styles.container}>
      <div className={styles.profileContainer}>
        <h2>{profileData?.name}</h2>
        <h3>{profileData?.designation}</h3>
      </div>

      <UploadPDF/>
    </div>
  );
}

export const getStaticProps = async () => {
  let { data, variables, query } = await client.queries.profile({
    relativePath: "Manikanta.mdx",
  });

  return {
    props: {
      data,
      query,
      variables,
    },
  };
};

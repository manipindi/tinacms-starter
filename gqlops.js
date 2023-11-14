import { gql } from "@apollo/client";

export const GET_PROFILE = gql`
  query profile {
    profile(relativePath: "Manikanta.mdx") {
      ... on Document {
        _sys {
          filename
          basename
          breadcrumbs
          path
          relativePath
          extension
        }
        id
      }
      ...ProfileParts
    }
  }

  fragment ProfileParts on Profile {
    __typename
    name
    designation
  }
`;

export const GET_PROFILE = `query profileConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: ProfileFilter) {
    profileConnection(
      before: $before
      after: $after
      first: $first
      last: $last
      sort: $sort
      filter: $filter
    ) {
      totalCount
      edges {
        cursor
        node {
            _sys {
              filename
              basename
              breadcrumbs
              path
              relativePath
              extension
            }
            id
          ...ProfileParts
        }
      }
    }
  }
  
  fragment ProfileParts on Profile {
    __typename
    name
    designation
  }`;

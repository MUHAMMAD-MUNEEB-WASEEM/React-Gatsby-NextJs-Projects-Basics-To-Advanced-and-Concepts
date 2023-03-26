import gql from "graphql-tag";

//query
export const QUERY_LAUNCH_LIST = gql`
  query LaunchList {
    launches {
      flight_number
      mission_name
      launch_year
      details
      launch_success
    }
  }
`;

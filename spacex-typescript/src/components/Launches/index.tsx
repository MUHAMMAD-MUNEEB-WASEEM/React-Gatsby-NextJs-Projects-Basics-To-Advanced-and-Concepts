import React from "react";
import { useLaunchListQuery } from "../../generated/graphql";
import Launch from "./Launch";

import './Launches.module.css';
const Launches = () => {
  const { data, error, loading } = useLaunchListQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }
  return (
    <>
      <h1 className="launchHeading" style={{ fontFamily: "montserrate", color:"#fff", textAlign:"center", paddingTop: 100, fontSize: 50, fontWeight: "bolder"}}>Launches</h1>
      <br />
      {data?.launches?.map(
        ({
          flight_number,
          mission_name,
          launch_year,
          details,
          launch_success,
        }: any) => (
          <Launch 
            flight_number={flight_number}
            mission_name={mission_name}
            launch_year={launch_year}
            details={details}
            launch_success={launch_success}
          />
        )
      )}
    </>
  );
};

export default Launches;

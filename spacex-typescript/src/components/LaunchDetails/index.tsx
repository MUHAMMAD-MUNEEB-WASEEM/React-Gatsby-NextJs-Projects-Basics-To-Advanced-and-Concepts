import * as React from "react";
import { useLaunchProfileQuery } from "../../generated/graphql";
import { useParams } from "react-router-dom";
import LaunchDetail from "./LaunchDetail";


//launch details
const LaunchDetails = () => {
  const { id } = useParams();
  const { data, error, loading } = useLaunchProfileQuery({
    variables: { id },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>ERROR</div>;
  }
  const launch = data?.launch;
  console.log(launch);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Details</h1>
      <div style={{ padding: "1rem" }}>
        <br />
        <h2>Launch Details:</h2>
        <LaunchDetail
          missionName={launch?.mission_name}
          launchYear={launch?.launch_year}
          launchSite={launch?.launch_site}
          launchSuccess={launch?.launch_success}
          rocketName={launch?.rocket?.rocket_name}
          rocketType={launch?.rocket?.rocket_type}
          launchDetails={launch?.details}
        />
        <br />
        {launch?.links?.flickr_images?.map((image: any) => (
          <img 
            style={{ width: "100%", objectFit: "contain" }}
            src={image}
            alt="launchPic"
          />
        ))}
      </div>
    </>
  );
};

export default LaunchDetails;

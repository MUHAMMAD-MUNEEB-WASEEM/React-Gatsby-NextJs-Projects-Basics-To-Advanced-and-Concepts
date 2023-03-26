import React from 'react';
import { shallow, ShallowWrapper, ReactWrapper } from "enzyme";
import ListDividers from "./LaunchDetail";

describe("Render App", () => {
  let AppWrapper: ShallowWrapper<
    any,
    Readonly<{}>,
    React.Component<{}, {}, any>
  >;
  AppWrapper = shallow(
    <ListDividers
    missionName= "FalconSat"
    launchYear= {2006}
    launchSite= "Kwajalein Atol"
    launchSuccess= {false}
    launchDetails= "Engine failure at 33 seconds and loss of vehicle"
    rocketName= "Falcon 1"
    rocketType= "falcon1"
    />
  );

  it("should render 1 div", () => {
    expect(AppWrapper.find("div").length).toEqual(1);
  });
  it("should render a span", () => {
    expect(AppWrapper.find("span").length).toEqual(1);
  });
})
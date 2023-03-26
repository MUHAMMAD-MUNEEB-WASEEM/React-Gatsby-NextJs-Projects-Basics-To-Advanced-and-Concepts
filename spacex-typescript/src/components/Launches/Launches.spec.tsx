import React from 'react';
import { shallow, ShallowWrapper, ReactWrapper } from "enzyme";
import OutlineCard from "./Launch";

describe("Render App", () => {
  let AppWrapper: ShallowWrapper<
    any,
    Readonly<{}>,
    React.Component<{}, {}, any>
  >;
  AppWrapper = shallow(
    <OutlineCard
      flightNumber={12}
      mission="mySat"
      launchDate="2020-09-30T20:00:00-04:00"
      launchSuccess={true}
    />
  );

  it("should render 1 div", () => {
    expect(AppWrapper.find("div").length).toEqual(1);
  });
  it("should render a div", () => {
    expect(AppWrapper.find("span").length).toBeGreaterThanOrEqual(1);
  });
})
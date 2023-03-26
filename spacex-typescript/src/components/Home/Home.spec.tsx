import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import Home from "./Home";

describe("Render App", () => {
  let AppWrapper: ShallowWrapper<
    any,
    Readonly<{}>,
    React.Component<{}, {}, any>
  >;
  beforeEach(() => (AppWrapper = shallow(<Home />)));
  it("should render a div", () => {
    expect(AppWrapper.find("div").length).toBeGreaterThanOrEqual(1);
  });
  it("should render a button with text Explore Now", () => {
    expect(AppWrapper.find("button").length).toEqual(1);
    expect(AppWrapper.find("button").text()).toBe("Explore Now");
  });
});
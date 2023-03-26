import React from 'react';
import App from './App';
import { shallow, ShallowWrapper } from "enzyme";
import NavBar from "./components/NavBar";

describe("Render App", () => {
  let AppWrapper: ShallowWrapper<
    any,
    Readonly<{}>,
    React.Component<{}, {}, any>
  >;
  beforeEach(() => (AppWrapper = shallow(<App />)));
  it("should render a div", () => {
    expect(AppWrapper.find("div").length).toEqual(1);
  });
  it("should render NavBar", () => {
    expect(AppWrapper.containsMatchingElement(<NavBar />)).toEqual(true);
  });

})
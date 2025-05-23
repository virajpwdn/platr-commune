import React from "react";
import AboutClass from "./AboutClass";
class About extends React.Component {
  constructor() {
    super();
    console.log("Parent Component constructor")
  }

  componentDidMount() {
    console.log("Parent Component is Mounted");
  }

  render() {
    console.log("Parent Component is Rendered");
    return (
      <>
        <h1>This is Parent About Page</h1>
        <AboutClass />
      </>
    );
  }
}

export default About;

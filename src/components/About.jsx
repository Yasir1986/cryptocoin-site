import React from "react";
import NavBar from "../components/NavBar"
import Options from "../components/Options"

class About extends React.Component {
  render() {
    return (
      <div>
          <NavBar/>
        <h1>ABOUT</h1>
        <Options/>
      </div>
    );
  }
}

export default About;
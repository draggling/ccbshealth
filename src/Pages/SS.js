import React from "react";
import "../App.css";
import SSBanner from "../Services/SSBanner";
import NavBar from "../NavBar";
import Footer from "../Footer";

class SS extends React.Component {

render () {
  return (
    <React.Fragment>
      <div className="App">    
        <NavBar/>
        <SSBanner/>
        <Footer/>
      </div>
    </React.Fragment>

  );
}

}

export default SS;

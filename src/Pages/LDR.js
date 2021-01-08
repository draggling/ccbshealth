import React from "react";
import "../App.css";
import LDRBanner from "../Services/LDRBanner";
import NavBar from "../NavBar";
import Footer from "../Footer";

class LDR extends React.Component {

render () {
  return (
    <React.Fragment>
      <div className="App">    
        <NavBar/>
        <LDRBanner/>
        <Footer/>
      </div>
    </React.Fragment>

  );
}

}

export default LDR;

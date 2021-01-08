import React from "react";
import "../App.css";
import ROIBanner from "../Services/ROIBanner";
import NavBar from "../NavBar";
import Footer from "../Footer";

class ROI extends React.Component {

render () {
  return (
    <React.Fragment>
      <div className="App">    
        <NavBar/>
        <ROIBanner/>
        <Footer/>
      </div>
    </React.Fragment>

  );
}

}

export default ROI;

import React from "react";
import "../App.css";
import Banner from "../BannerComponent";
import NavBar from "../NavBar";
import ServicesContainer from "../ServiceComponent";
import Footer from "../Footer";

class App extends React.Component {

state = {
  submitted: false,
}



handleSubmit = () => {
  this.setState({submitted: !this.state.submitted, showForm: !this.state.showForm})
}

render () {
  return (
    <div className="App">
      <NavBar />
      <Banner showForm={this.showForm}/>
      <ServicesContainer/>
      <Footer/>
      
    </div>

  );
}



}
export default App;

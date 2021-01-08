import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import LDR from "./Pages/LDR";
import ROI from "./Pages/ROI";
import SS from "./Pages/SS";
import Form from "./Form";
import { Switch, Route } from 'react-router-dom';


class App extends React.Component {

render () {
  return (
    <div className="App">
      <Switch>
        <Route exact path ="/" component={Home} ></Route>
        <Route exact path ="/ReleaseOfInformation" component={ROI}></Route>
        <Route exact path ="/StorageServices" component={SS}></Route>
        <Route exact path ="/LegalDocumentRetrieval" component={LDR}></Route>
        <Route exact path ="/form" component={Form}></Route>
      </Switch>
    </div>
  );
}



}
export default App;

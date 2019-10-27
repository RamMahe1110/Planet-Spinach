import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import Topbar from "./components/Topbar/Topbar";
import CategoryRoutes from "./components/CategoryRoutes/CategoryRoutes";
import Footer from "./components/Footer/Footer";
import { connect } from "react-redux";
import Authentication from "./pages/Authentication/Authentication";

class App extends React.Component {
  state = {
    isSignedIn: null,
    email: null
  };

  render() {
    return (
      <div className="App">
        <Topbar />
        <Route exact path="/" component={Homepage} />
        <Route path="/auth" component={Authentication} />
        <Route path="/category" component={CategoryRoutes} />
      </div>
    );
  }
}

export default connect(
  null,
  null
)(App);

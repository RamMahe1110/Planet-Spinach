import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import Topbar from "./components/Topbar/Topbar";
import CategoryRoutes from "./components/CategoryRoutes/CategoryRoutes";
import Footer from "./components/Footer/Footer";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Topbar />
        <Route exact path="/" component={Homepage} />
        <Route path="/category" component={CategoryRoutes} />
        <Footer />
      </div>
    );
  }
}

export default App;

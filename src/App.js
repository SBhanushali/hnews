import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Top, Latest, Jobs } from "./pages";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SideMenu from "./components/SideMenu";

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="lg:mx-5 lg:ml-8 flex flex-col justify-around lg:flex-row">
        <SideMenu />
        <Switch>
          <Route exact path={["/", "/top"]}>
            <Top />
          </Route>
          <Route path="/latest">
            <Latest />
          </Route>
          <Route path="/jobs">
            <Jobs />
          </Route>
        </Switch>
        <Footer />
      </div>
    </div>
  );
};

export default App;

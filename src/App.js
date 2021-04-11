import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NewsFeed from "./components/NewsFeed";
import SideMenu from "./components/SideMenu";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="lg:mx-5 lg:ml-8 flex flex-col justify-around lg:flex-row">
        <SideMenu />
        <NewsFeed />
        <Footer />
      </div>
    </div>
  );
};

export default App;

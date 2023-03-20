import React, { Fragment } from "react";
import Header from "../components/Header/Header";
import Events from "../components/Events/Events";
import About from "../components/AboutUs/About";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Events/>
      <About/>
      <Footer />
    </Fragment>
  );
};

export default Home;

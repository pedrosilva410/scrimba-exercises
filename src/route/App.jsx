import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Header from "../components/Header";
import Footer from "../components/Footer";
import JSExercises from "../pages/JSExercises";
import PassengerCounter from "../pages/PassengerCounter";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/JSExercises" component={JSExercises} />
        <Route path='/PassengerCounter' component={PassengerCounter}/>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

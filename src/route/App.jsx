import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CSSExercises from "../pages/CSSExercises";
import HTMLExercises from "../pages/HTMLExercises";
import JSExercises from "../pages/JSExercises";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/HTMLExercises" component={HTMLExercises} />
        <Route path="/CSSExercises" component={CSSExercises} />
        <Route path="/JSExercises" component={JSExercises} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

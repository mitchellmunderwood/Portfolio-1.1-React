import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavTabs from "./components/NavTabs/index";
import Footer from "./components/Footer/index";
import Home from "./pages/Home/index";
import About from "./pages/About/index";
import Portfolio from "./pages/Portfolio/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <NavTabs />
        <main>
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
          </Switch>
        </main>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./pages/landing_page";
import ProductPage from "./pages/products_page";
import ServicesPage from "./pages/services_page";
import AboutPage from "./pages/about_page";
import ContactPage from "./pages/contact_page";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Landing} />
        <Route path="/products" component={ProductPage} />
        <Route path="/services" component={ServicesPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <section className="wave"></section>
        <section></section>
      </div>
    </Router>
  );
}
export default App;

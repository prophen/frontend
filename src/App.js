import React from "react";
import Books from "./components/Books";
import BookPage from "./components/BookPage";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <>
        <Route exact path="/" component={Books} />
        <Route exact path="/book/:id" component={BookPage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard/:userName" component={Dashboard} />
      </>
    </Router>
  );
}

export default App;

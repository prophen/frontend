import React from "react";
import Books from "./components/Books";
import BookPage from "./components/BookPage";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import NavBar from "./components/NavBar";
import { Box } from "rebass";

function App() {
  return (
    <Router>
      <>
        <NavBar />
        <Box m={3} p={3}>
          <Route exact path="/" component={Books} />
          <Route exact path="/book/:id" component={BookPage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard/:userName" component={Dashboard} />
        </Box>
      </>
    </Router>
  );
}

export default App;

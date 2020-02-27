import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Flex, Box, Button } from "rebass";
import { isLoggedIn } from "./functions";

export default function NavBar() {
  const history = useHistory();
  const handleLogout = () => {
    localStorage.removeItem("token");
    history.push("/");
  };

  return (
    <nav>
      <Flex
        className="header"
        p={3}
        color="black"
        bg="white"
        alignItems="center"
      >
        <h1>Book Reviews</h1>
        <Box mx="auto" />
        <ul className="nav-links">
          {isLoggedIn() ? (
            <li>
              <Button onClick={handleLogout}>Logout</Button>
            </li>
          ) : (
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          )}

          <li>
            <NavLink to="/">Books</NavLink>
          </li>
        </ul>
      </Flex>
    </nav>
  );
}

import React from "react";
import { NavLink } from "react-router-dom";
import { Flex, Box } from "rebass";
export default function NavBar() {
  return (
    <nav>
      <Flex px={4} color="white" bg="black" alignItems="center">
        <h1>Book Reviews</h1>
        <Box mx="auto" />
        <ul className="nav-links">
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/">Books</NavLink>
          </li>
        </ul>
      </Flex>
    </nav>
  );
}

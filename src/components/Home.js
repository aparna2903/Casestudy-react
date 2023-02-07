import React from "react";
import Register from "./Register";
import Login from "./Login";

// import Table from "./Table";

// import Dtable from "./Dtable";

// import Demo from "./Demo";

import Main from "./Main";

import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
// import Dtable from "./Dtable";

function Home() {
  return (
    <BrowserRouter>
      <div>
        <Navbar>
          <Container>
            <Nav>
              <Nav.Link as={Link} to="/register">
                Register
              </Nav.Link>
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
              <Nav.Link as={Link} to="/link">
                Main
              </Nav.Link>
              <Nav.Link as={Link} to="/register">
                Logout
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>

      <div>
        <Routes>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/link" element={<Main />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default Home;

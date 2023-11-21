import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import { faClapperboard } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import Search from "../search/Search";

const Header = ({ movies }) => {
  const email = localStorage.getItem("email");

  return (
    <Navbar bg="dark" variant="dark" expand="lg" style={{ width: "100vw" }}>
      <Container fluid>
        <Navbar.Brand href="/" style={{ color: "gold" }}>
          <FontAwesomeIcon icon={faClapperboard} /> RR CRITICS
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/watchList">
              Watch List
            </NavLink>
          </Nav>
          <div className="searchBar ">
            <Search movies={movies} />
          </div>

          {email ? (
            // If user is logged in
            <Link to="/logout">
              <Button variant="outline-info" className="me-2">
                Logout
              </Button>
            </Link>
          ) : (
            // If user is not logged in
            <>
              <Link to="/login">
                <Button variant="outline-info" className="me-2">
                  Login
                </Button>
              </Link>
              <Link to="/Register">
                <Button variant="outline-info">Register</Button>
              </Link>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

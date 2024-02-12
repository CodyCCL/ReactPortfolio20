import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Collapse,
} from "reactstrap";

const styles = {
  navbar: {
    backgroundColor: "#FFFFFF",
  },
  link: {
    color: "#2A9DB8",
    fontWeight: "700",
    paddingRight: "2rem",
  },
  linkIcons: {
    color: "#FD6801",
    fontWeight: "700",
  },
};


function Navigation(props) {
  const [collapsed, setCollapsed] = useState(true);
  const location = useLocation();
  const lastHash = useRef("");

  const toggleNavbar = () => setCollapsed(!collapsed);

  useEffect(() => {
    if (location.hash) {
      lastHash.current = location.hash.slice(1);
    }

    if (lastHash.current && document.getElementById(lastHash.current)) {
      setTimeout(() => {
        document
          .getElementById(lastHash.current)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
        lastHash.current = "";
      }, 100);
    }
  }, [location]);


  return (
    <>
    <Navbar expand="md" container light style={styles.navbar}>
        <NavbarBrand style={styles.link} tag={Link} to="/" className="me-auto">
          Cody Lin
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
        <Nav navbar className="mx-auto py-5">
            <NavItem>
              <NavLink style={styles.link} tag={Link} to="/aboutme">
                About Me
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={styles.link} tag={Link} to="/portfolio">
                Portfolio
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={styles.link} tag={Link} to="/contact">
                Contact
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={styles.link} tag={Link} to="/resume">
                Resume
              </NavLink>
            </NavItem>
          </Nav>
          </Collapse>
          </Navbar>
     </>
  );
};

export default Navigation;

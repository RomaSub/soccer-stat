import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import getRoutes from "../routes";
import { useEffect, useState } from "react";

const Header = () => {
  const { t } = useTranslation();
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.body.setAttribute("data-bs-theme", theme);
    document.body.classList.remove(theme === "dark" ? "bg-light" : "bg-dark");
    document.body.classList.add(theme === "dark" ? "bg-dark" : "bg-light");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <Navbar expand="sm" className="shadow-sm">
      <Container>
        <Navbar.Brand>Soccer-stat</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={getRoutes.competitionsPagePath()}>
              {t("competitions")}
            </Nav.Link>
            <Nav.Link as={Link} to={getRoutes.teamsPagePath()}>
              {t("teams")}
            </Nav.Link>
          </Nav>
          <Button variant={theme} onClick={toggleTheme}>
            {theme === "dark" ? <i className="bi bi-moon-stars-fill"></i> : <i className="bi bi-sun"></i>}
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

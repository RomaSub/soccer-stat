import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Nav, Navbar, Container, Form } from "react-bootstrap";
import getRoutes from "../routes";
import { useState } from "react";

const Header = () => {
  const { t } = useTranslation();
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    document.body.setAttribute("data-bs-theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <Navbar expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand>Что-то</Navbar.Brand>
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
          <Form>
            <Form.Check
              type="switch"
              id="theme-switch"
              onChange={toggleTheme}
              checked={theme === "dark"}
              label={t("darkTheme")}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

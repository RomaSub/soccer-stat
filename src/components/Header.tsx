import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";
import getRoutes from "../routes";

const Header = () => {
  const { t } = useTranslation();

  return (
    <Navbar bg="white" expand="lg" className="shadow-sm">
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

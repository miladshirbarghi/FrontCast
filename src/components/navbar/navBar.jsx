import { Container } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import frontCastLogo from "../../assets/images/frontcast-logo.png";

function NavBar() {
  return (
    <Navbar expand="md" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">خانه</Nav.Link>
            <Nav.Link href="/courses">دوره‌های آموزشی</Nav.Link>
            <Nav.Link href="/blog">وبلاگ</Nav.Link>
            <Nav.Link href="/cart">سبد خرید</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand href="/">
          <img src={frontCastLogo} alt="FrontCast Logo" style={{ height: '40px' }} />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavBar;

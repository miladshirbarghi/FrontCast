import { Container } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';

function Footer() {
  return (
    <footer className="bg-light py-2">
      <Container>
        <Nav className="justify-content-center mb-3">
          <Nav.Item>
            <Nav.Link className="text-secondary fs-5" href="/contact">تماس با ما</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="text-secondary fs-5" href="https://www.youtube.com/MasoodSadri">یوتوب</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="text-secondary fs-5" href="https://t.me/frontcast">تلگرام</Nav.Link>
          </Nav.Item>
        </Nav>
        <p className="text-center text-secondary m-0">تمامی حقوق برای فرانت‌کست محفوظ است.</p>
      </Container>
    </footer>
  );
}

export default Footer;

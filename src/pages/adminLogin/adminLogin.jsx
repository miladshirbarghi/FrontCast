import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";

function AdminLogin() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (password === "123456") {
      localStorage.setItem("isAdmin", true);
      navigate("/admin");
    } else {
      alert("رمز اشتباه است");
    }
  };

  return (
    <Container className="my-5" style={{ maxWidth: "400px" }}>
      <h3>ورود به پنل مدیریت</h3>
      <Form onSubmit={(e) => e.preventDefault()}>
        <Form.Group className="mb-3">
          <Form.Label>رمز عبور</Form.Label>
          <Form.Control
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button onClick={handleLogin} variant="primary">
          ورود
        </Button>
      </Form>
    </Container>
  );
}

export default AdminLogin;

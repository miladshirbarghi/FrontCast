import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import { FaClock, FaGraduationCap, FaMoneyBillAlt } from "react-icons/fa";
import Footer from "../footer/footer";
import { CartContext } from "../../context/CartContext"; // ✅ ایمپورت کانتکست
import Swal from "sweetalert2";

function Course() {
  const [courseState, setCourseState] = useState({});
  const courseId = useParams().courseId;
  const { addToCart } = useContext(CartContext); 

  useEffect(() => {
    axios.get(`http://localhost:5000/courses/${courseId}`)
      .then((response) => setCourseState(response.data));
  }, [courseId]);

  const handleAddToCart = () => {
    addToCart({
      id: courseState.id,
      title: courseState.title,
      price: courseState.price,
      image: courseState.image
    });

    Swal.fire({
      icon: "success",
      title: "به سبد خرید اضافه شد!",
      showConfirmButton: false,
      timer: 1500
    });
  };

  return (
    <>
      <Container>
        <br /><br />
        <Card className="p-3 shadow-sm rounded-4">
          <Row>
            <Col md={6}>
              <div className="position-relative">
                <Card.Img
                  variant="top"
                  src={courseState.image}
                  className="rounded-3"
                  style={{ objectFit: "cover", maxHeight: "340px" }}
                />
              </div>
            </Col>
            <Col md={6} className="d-flex flex-column justify-content-between mt-3">
              <div>
                <h5 className="fw-bold">{courseState.title}</h5>
                <div className="d-flex align-items-center gap-2 my-2">
                  <FaMoneyBillAlt />
                  <span>{courseState.price}</span>
                </div>
                <div className="d-flex align-items-center gap-2 my-2">
                  <FaClock />
                  <span>{courseState.time}</span>
                </div>
                <div className="d-flex align-items-center gap-2 my-2">
                  <FaGraduationCap />
                  <span>{courseState.students} دانشجو </span>
                </div>
              </div>
              <div className="mt-3 d-flex flex-column gap-2">
                <Button variant="outline-primary" className="rounded-3" onClick={handleAddToCart}>
                  افزودن به سبد خرید
                </Button>
              </div>
            </Col>
          </Row>
        </Card>
        <p className="text-justify fw-bold mt-3">{courseState.desc}</p>
        <hr />
        <Footer />
      </Container>
    </>
  );
}

export default Course;

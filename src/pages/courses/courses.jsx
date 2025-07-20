import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import CourseItem from "../../components/courseItems/courseItem";
import Footer from "../../components/footer/footer";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get('http://localhost:5000/courses')
      .then(response => {
        setCourses(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError("خطا در دریافت لیست دوره‌ها");
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Container>
        <br />
        <h2>دوره های آموزشی</h2>

        {loading ? (
          <div className="text-center my-5">
            <Spinner animation="border" variant="primary" />
          </div>
        ) : error ? (
          <Alert variant="danger" className="text-center">
            {error}
          </Alert>
        ) : (
          <Row className="my-5 mx-auto">
            {courses.map(course => (
              <Col key={course.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
                <CourseItem 
                  title={course.title}
                  desc={course.desc}
                  price={course.price}
                  image={course.image}
                  id={course.id}
                />
              </Col>
            ))}
          </Row>
        )}

        <hr />
        <Footer />
      </Container>
    </>
  );
}

export default Courses;

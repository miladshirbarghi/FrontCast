import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import CourseItem from "../../components/courseItems/courseItem";
import msoodImage from "../../assets/images/masood.jpg"
import CommmentItems from "../../components/commentItems/commentItems";
import Footer from "../../components/footer/footer";


function Home() {

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/courses')
      .then(response => setCourses(response.data))
      .catch(err => console.error("خطا در دریافت دوره‌ها:", err));
  }, []);


  const [comments , setComments] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/comments')
          .then(response => setComments(response.data))
          .catch(err => console.error("خطا در دریافت دوره‌ها:", err));
    }, []);

  return (
    <>
      <br /><br /><br />
      <Container className="mt-4">
        <Row className="d-flex align-items-center justify-content-around my-5">
          <Col xs={12} md={7}  className="me-auto mt-4 " >
            <h1> برنامه نویسی به زبان <span className="text-primary">ساده</span>.</h1>
            <p className="fs-4 mt-4">آموزش برنامه‌نویسی، ساده، استاندارد و باکیفیت.</p>
          </Col>
          <Col xs={12} md={5} className="d-none mx-auto d-lg-block mt-4">
            <img
              className="rounded img-fluid"
              style={{ height: "28rem", objectFit: "cover" }}
              src={msoodImage}
              alt="تصویر"
              />
          </Col>
        </Row>
        <br /><br /><br />
        <h2 className="mb-4 mt-5">لیست دوره‌ها</h2>
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
        <br /><br />
        <Row>
          <h1>از زبان دانشجویان فرانت کست</h1>
          {comments.map(comment=>(
            <Col key={comment.id} xs={12} md={6} lg={4}>
              <CommmentItems 
                name={comment.name}
                desc={comment.desc}
                image={comment.image}
              />
            </Col>
          ))}
        </Row>
        <hr />
        <br />
      <Footer />
      </Container>
    </>
  );
}

export default Home;

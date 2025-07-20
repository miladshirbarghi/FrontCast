import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Table, Button, Form, Row, Col } from "react-bootstrap";
import Swal from "sweetalert2";

function Admin() {
  const [courses, setCourses] = useState([]);
  const [form, setForm] = useState({
    title: "",
    desc: "",
    price: "",
    image: ""
  });

  const fetchCourses = () => {
    axios
      .get("http://localhost:5000/courses")
      .then((res) => setCourses(res.data))
      .catch(() => alert("خطا در دریافت دوره‌ها"));
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddCourse = async (e) => {
    e.preventDefault();
    const { title, desc, price, image } = form;

    if (!title || !desc || !price || !image) {
      return Swal.fire("خطا", "همه فیلدها الزامی هستند", "warning");
    }

    try {
      await axios.post("http://localhost:5000/courses", form);
      Swal.fire("موفق", "دوره اضافه شد", "success");
      setForm({ title: "", desc: "", price: "", image: "" });
      fetchCourses();
    } catch {
      Swal.fire("خطا", "افزودن دوره انجام نشد", "error");
    }
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "حذف دوره؟",
      text: "آیا مطمئن هستید؟",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "بله حذف کن",
      cancelButtonText: "لغو"
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.delete(`http://localhost:5000/courses/${id}`);
        fetchCourses();
        Swal.fire("حذف شد", "دوره با موفقیت حذف شد", "success");
      }
    });
  };

  return (
    <Container className="my-5">
      <h2 className="mb-4">پنل مدیریت دوره‌ها</h2>

      <Form onSubmit={handleAddCourse} className="mb-5">
        <Row className="g-3">
          <Col md={6}>
            <Form.Control
              placeholder="عنوان دوره"
              name="title"
              value={form.title}
              onChange={handleChange}
            />
          </Col>
          <Col md={6}>
            <Form.Control
              placeholder="توضیح کوتاه"
              name="desc"
              value={form.desc}
              onChange={handleChange}
            />
          </Col>
          <Col md={4}>
            <Form.Control
              placeholder="قیمت (یا رایگان)"
              name="price"
              value={form.price}
              onChange={handleChange}
            />
          </Col>
          <Col md={4}>
            <Form.Control
              placeholder="آدرس تصویر"
              name="image"
              value={form.image}
              onChange={handleChange}
            />
          </Col>
          <Col md={4}>
            <Button type="submit" variant="success" className="w-100">
              افزودن دوره
            </Button>
          </Col>
        </Row>
      </Form>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>تصویر</th>
            <th>عنوان</th>
            <th>قیمت</th>
            <th>حذف</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>
                <img
                  src={course.image}
                  alt={course.title}
                  width="100"
                  height="60"
                  style={{ objectFit: "cover", borderRadius: "8px" }}
                />
              </td>
              <td>{course.title}</td>
              <td>{course.price}</td>
              <td>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDelete(course.id)}
                >
                  حذف
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default Admin;

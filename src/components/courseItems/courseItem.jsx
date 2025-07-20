import { Card } from "react-bootstrap";
import "./courseItem.css"
import { Link } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";

function CourseItem({ title, price, id, image}){
  return (
    <Card className="mx-auto" style={ {height: '23rem'} }>
      <Card.Img 
        className="img-fluid"
        variant="top" 
        src={image} 
        alt={title} 
      />
      <Card.Body className="d-flex flex-column justify-content-between course-item-card">
        <Card.Title>{title}</Card.Title>
        <Card.Text>
        </Card.Text>
        <div className="d-flex justify-content-between align-items-center">
          <Link to={`/course/${id}`}  className="Link">مشاهده دوره <FaLongArrowAltLeft size='15px' /></Link>
          <span className="text-primary">
            {price === 'رایگان' ? 'رایگان' : `${price} تومان`}
          </span>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CourseItem;

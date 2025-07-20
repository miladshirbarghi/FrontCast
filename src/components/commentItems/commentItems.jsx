import { Card, Row, Col, Image } from "react-bootstrap";

function CommmentItems({image , desc , name}){
    return(
    <Card className="shadow-sm border-0 mx-auto my-3 rounded-4 " style={{height : '26rem'}}>
      <Card.Body>
        <Row className="align-items-center">
          <Col xs="auto">
            <Image
              src={image}
              roundedCircle
              style={{ width: "60px", height: "60px", objectFit: "cover" }}
            />
          </Col>
          <Col>
            <Card.Title className="fw-bold">{name}</Card.Title>
          </Col>
        </Row>
        <Card.Text className="mt-3 text-justify" style={{ textAlign: "justify" }}>
          {desc}
        </Card.Text>
      </Card.Body>
    </Card>
    )
}
export default CommmentItems;
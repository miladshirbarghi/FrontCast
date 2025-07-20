import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Container, Table, Button, Image } from "react-bootstrap";

function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  if (cartItems === null) {
    return (
      <Container className="my-5">
        <h2 className="mb-4">سبد خرید</h2>
        <p>در حال بارگذاری سبد خرید...</p>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <h2 className="mb-4">سبد خرید</h2>

      {cartItems.length === 0 ? (
        <p>سبد خرید شما خالی است.</p>
      ) : (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>عکس</th>
              <th>عنوان</th>
              <th>قیمت</th>
              <th>حذف</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>
                  <Image
                    src={item.image}
                    style={{ width: "60px", height: "auto" }}
                    rounded
                  />
                </td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => removeFromCart(item.id)}
                  >
                    حذف
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
}

export default Cart;

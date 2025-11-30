import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCartContext } from "../context/useShoppingCartContext";
import CartItem from "./CartItem";

interface IShoppingCart {
  isOpen: boolean;
}

function ShoppingCart({ isOpen }: IShoppingCart) {
  const { closeCart, cartItems } = useShoppingCartContext();

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default ShoppingCart;

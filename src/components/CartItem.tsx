import { Stack } from "react-bootstrap";
import { useShoppingCartContext } from "../context/useShoppingCartContext";
import storeItem from "../data/items.json";

interface ICartItem {
  id: number;
  quantity: number;
}

function CartItem({ id, quantity }: ICartItem) {
  const { removeFromCart } = useShoppingCartContext();
  let item = storeItem.find((i) => i.id === id);
  if (item === null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item?.imgUrl}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
    </Stack>
  );
}

export default CartItem;

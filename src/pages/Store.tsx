import { Row, Col } from "react-bootstrap";
import StoreItems from "../data/items.json";
import StoreItem from "../components/StoreItem";
function Store() {
  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="gap-0.5">
        {StoreItems.map((items) => {
         return <Col key={items.id}>
            <StoreItem {...items} />
          </Col>;
        })}
      </Row>
    </>
  );
}

export default Store;

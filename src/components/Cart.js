import Item from "./Item";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { products, total, formatMoney } = useCart();

  return (
    <div className="Cart">
      <h1 style={{ textAlign: "center" }}>
        {products.length > 0
          ? `Summary : ${formatMoney(total)} ฿`
          : "Not have Products in Cart."}
      </h1>
      {products.map((data) => {
        return <Item key={data.id} {...data} />;
      })}
    </div>
  );
}

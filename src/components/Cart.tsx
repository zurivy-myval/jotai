import { useAtom } from "jotai";
import { cartAtom, totalAtom } from "../cart-atoms.tsx";
import Navbar from "./Navbar.tsx";

const Cart = () => {
  const [cart, setCart] = useAtom(cartAtom);
  const [total] = useAtom(totalAtom);

  const addItem = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeItem = (idx) => {
    setCart((prevCart) => prevCart.filter((_, index) => index !== idx));
  };

  return (
    <div>
      <Navbar />
      <h1>Shopping cart</h1>
      <ul>
        {cart?.map((item, idx) => {
          return (
            <li key={idx}>
              {item.itemName} - ${item.price.toFixed(2)}
              <button onClick={() => removeItem(idx)}>Remove</button>
            </li>
          );
        })}
      </ul>
      <h2>Total: $ {Number(total).toFixed(2)}</h2>
      <button onClick={() => addItem({ itemName: "Apple", price: 0.99 })}>
        Add Apple
      </button>
      <button onClick={() => addItem({ itemName: "Banana", price: 1.99 })}>
        Add Banana
      </button>
    </div>
  );
};

export default Cart;

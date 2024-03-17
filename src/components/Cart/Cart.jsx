import { useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <>
      <Navbar />
      <div className="mt-4 w-[90%] mx-auto">
        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between mb-2">
            <p>{item.title}</p>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </>
  );
};
export default Cart;

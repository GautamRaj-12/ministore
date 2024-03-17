import { useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <>
      <Navbar />
      {cartItems.length <= 0 ? (
        <div className="mt-4 text-6xl text-center">Cart is empty</div>
      ) : (
        <div className="mt-4 w-[90%] mx-auto">
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between mb-2">
              <Link to={`/product/${item.id}`}>
                <p>{item.title.slice(0, 30) + "..."}</p>
              </Link>
              <p>{item.price}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
export default Cart;

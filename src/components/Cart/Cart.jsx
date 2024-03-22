import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
  return (
    <>
      <div className="flex items-center justify-center gap-4 mt-4">
        <h2 className="text-3xl font-bold text-center">Shopping Cart</h2>
        <div className="relative">
          <i className="text-3xl fa-solid fa-cart-shopping"></i>
          <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -right-3 text-md top-4 bg-rose-500">
            <p>{cartItems.length}</p>
          </span>
        </div>
      </div>

      {cartItems.length <= 0 ? (
        <div className="mt-32 text-center text-7xl text-rose-500">
          <i className="fa-solid fa-heart-crack"></i>
          <p className="text-lg font-semibold text-slate-500">
            It is so empty here....
          </p>
        </div>
      ) : (
        <div className="mt-8 w-[95%] md:w-[50%] mx-auto dark:bg-slate-800 bg-white shadow-lg p-5">
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between mb-2">
              <Link to={`/product/${item.id}`}>
                <p>{item.title.slice(0, 30) + "..."}</p>
              </Link>
              <p>{item.price}</p>
            </div>
          ))}
          <div className="flex justify-between border-t-2 border-rose-500/50 total">
            <p className="">Total</p>
            <p className="">{totalPrice}</p>
          </div>
          <div className="flex justify-center mt-5">
            <button className="flex justify-center p-2 rounded w-30 bg-rose-500/90">
              Checkout
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default Cart;

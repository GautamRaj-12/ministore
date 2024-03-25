const CartNotification = ({ isVisible }) => {
  return (
    <div
      className={`fixed p-2 rounded-sm top-2 right-2 bg-rose-500 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <p>Added to cart</p>
    </div>
  );
};
export default CartNotification;

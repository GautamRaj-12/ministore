import { Link } from "react-router-dom";
import { useState } from "react";
import { addItem } from "../../app/cartSlice";
import { useDispatch } from "react-redux";
import CartNotification from "../CartNotification/CartNotification";

const ProductCard = (props) => {
  const dispatch = useDispatch();
  const [showNotification, setShowNotification] = useState(false);
  const handleAddItem = (product) => {
    dispatch(addItem(product));
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 2000);
  };
  return (
    <>
      <div
        key={props.id}
        className="grid grid-cols-1 gap-4 p-4 mb-6 rounded-md shadow-2xl border-slate-400 dark:bg-slate-800"
      >
        <div className="flex justify-center">
          <img src={props.image} alt="" className="w-[80%] h-36" />
        </div>
        <div className="object-cover text-xl font-semibold text-center">
          <Link to={`product/${props.id}`}>
            {props.title?.length > 20
              ? props.title.slice(0, 20) + "..."
              : props.title}
          </Link>
        </div>
        <div className="text-center">
          <span className="text-sm text-slate-400 italics">
            {props.category}
          </span>
        </div>
        <div className="flex justify-between">
          <div className="font-medium">Rating: {props.rate}</div>
          <div className="font-medium">{props.count} reviews</div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-xl font-semibold text-center text-rose-500">{`$${props.price}`}</div>
          <button
            className="flex justify-center p-2 font-semibold rounded w-30 bg-rose-500/90 dark:text-slate-100 text-slate-950"
            onClick={() => handleAddItem(props)}
          >
            Add to Cart
          </button>
        </div>
        <CartNotification isVisible={showNotification} />
      </div>
    </>
  );
};
export default ProductCard;

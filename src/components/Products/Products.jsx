import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addItem } from "../../app/cartSlice";
import { useDispatch } from "react-redux";
import useDebounce from "../../hooks/useDebounce";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [debounceCounter, setDebounceCounter] = useState(0);

  const dispatch = useDispatch();
  const handleAddItem = (product) => {
    dispatch(addItem(product));
    alert("Added to cart");
  };

  const debouncedSearchText = useDebounce(searchText, 500); // Debounce the search text

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        setDisplayedProducts(data); // Initially, display all products
      } catch (error) {
        console.error("Some error occurred", error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    console.log("Debounce Counter:", debounceCounter);
    setDebounceCounter((prevCounter) => prevCounter + 1);
  }, [debouncedSearchText]);

  useEffect(() => {
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(debouncedSearchText.toLowerCase())
    );
    setDisplayedProducts(filteredProducts);
  }, [debouncedSearchText, products]);

  return (
    <>
      <section className="search w-[90%] mx-auto" id="products">
        <div className="flex justify-center gap-2 my-4">
          <input
            type="text"
            placeholder="search your favourite items"
            className="md:w-[60%] w-[100%] p-2 border-slate-500 outline-none bg-slate-700/10 dark:text-slate-200 text-slate-500"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
      </section>
      <section className="w-[90%] mx-auto">
        <h2 className="mb-8 text-6xl font-bold text-center">Products</h2>
        <div className="grid grid-cols-1 gap-2 shadow-lg md:grid-cols-4 sm:grid-cols-2">
          {displayedProducts.map((product) => (
            <div
              key={product.id}
              className="grid grid-cols-1 gap-4 p-4 mb-6 rounded-md shadow-2xl border-slate-400 dark:bg-slate-800"
            >
              <div className="flex justify-center">
                <img src={product.image} alt="" className="w-[80%] h-36" />
              </div>
              <div className="object-cover text-xl font-semibold text-center">
                <Link to={`product/${product.id}`}>
                  {product.title.length > 20
                    ? product.title.slice(0, 20) + "..."
                    : product.title}
                </Link>
              </div>
              <div className="text-center">
                <span className="text-sm text-slate-400 italics">
                  {product.category}
                </span>
              </div>
              <div className="flex justify-between">
                <div className="font-medium">Rating: {product.rating.rate}</div>
                <div className="font-medium">
                  {product.rating.count} reviews
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-xl font-semibold text-center text-rose-500">{`$${product.price}`}</div>
                <button
                  className="flex justify-center p-2 rounded w-30 bg-rose-500/90"
                  onClick={() => handleAddItem(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Products;

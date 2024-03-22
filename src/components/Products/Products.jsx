import React, { useEffect, useState } from "react";
import { fetchProducts } from "../../utils/apiCall";
import useDebounce from "../../hooks/useDebounce";
import ProductCard from "../ProductCard/ProductCard";
import Shimmer from "../Shimmer/Shimmer";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [displayedProducts, setDisplayedProducts] = useState([]);
  // const [debounceCounter, setDebounceCounter] = useState(0);

  const debouncedSearchText = useDebounce(searchText, 500); // Debounce the search text

  useEffect(() => {
    const fetchedProducts = async () => {
      const data = await fetchProducts();
      // console.log(data);
      setProducts(data);
    };
    fetchedProducts();
  }, []);

  // useEffect(() => {
  //   console.log("Debounce Counter:", debounceCounter);
  //   setDebounceCounter((prevCounter) => prevCounter + 1);
  // }, [debouncedSearchText]);

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
          {displayedProducts.length > 0
            ? displayedProducts.map((product) => (
                <ProductCard
                  id={product.id}
                  image={product.image}
                  title={product.title}
                  price={product.price}
                  category={product.category}
                  rate={product.rating.rate}
                  count={product.rating.count}
                />
              ))
            : Array.from({ length: 10 }).map((_, index) => (
                <Shimmer key={index} />
              ))}
        </div>
      </section>
    </>
  );
};

export default Products;

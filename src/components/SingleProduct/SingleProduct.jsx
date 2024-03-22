import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductsById } from "../../utils/apiCall";
import ProductCard from "../ProductCard/ProductCard";
import Shimmer from "../Shimmer/Shimmer";

const SingleProduct = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (!productId) {
          throw new Error("Product ID not provided");
        }
        const data = await fetchProductsById(productId);
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [productId]);

  return (
    <>
      <section className="w-[90%] mx-auto mt-5 flex justify-center">
        {product ? (
          <ProductCard
            id={product?.id}
            image={product?.image}
            title={product?.title}
            price={product?.price}
            category={product?.category}
            rate={product?.rating?.rate}
            count={product?.rating?.count}
          />
        ) : (
          <Shimmer />
        )}
      </section>
    </>
  );
};

export default SingleProduct;

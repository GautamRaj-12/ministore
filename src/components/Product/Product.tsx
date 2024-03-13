import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
}

const Product: React.FC = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (!productId) {
          throw new Error('Product ID not provided');
        }

        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        if (!response.ok) {
          throw new Error('Product not found');
        }

        const data: Product = await response.json();
        console.log(data);
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <section className="w-[90%] mx-auto mt-5 flex justify-center">
        <div className="flex flex-col items-center justify-center max-w-3xl gap-4 p-2 shadow-lg">
          <div><img src={product.image} alt="" className="h-60"/></div>
          <h2 className="text-3xl font-semibold">{product.title}</h2>
          <p className="text-lg">{product.description}</p>
          <p className="text-2xl font-bold">{product.price}</p>
          <p>{product.category}</p>
          <p>{product.rating?.rate}</p>
          <p>{product.rating?.count}</p>
        </div>
      </section>
    </>
  );
};

export default Product;
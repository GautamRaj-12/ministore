import React, { useEffect, useState } from 'react';

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
}

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data: Product[] = await response.json();
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.error('Some error occurred', error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <section className='w-[90%] mx-auto'>
        <div className='grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4'>
          {products.map((product) => (
            <div
              key={product.id}
              className='border-2 p-2 grid grid-cols-1 gap-2'
            >
              <div>
                <img src={product.image} alt='' className='w-[80%] h-40' />
              </div>

              <div className='font-semibold text-2xl object-cover'>
                {product.title.length > 30
                  ? product.title.slice(0, 30) + '...'
                  : product.title}
              </div>
              <div className='font-semibold text-xl'>{product.price}</div>
              <div>{product.description.slice(0, 100) + '...'}</div>
              <div>{product.category}</div>
              <div>{product.rating.rate}</div>
              <div>{product.rating.count}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Products;

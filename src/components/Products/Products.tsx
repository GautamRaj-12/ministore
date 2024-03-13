import React, { useEffect, useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { addItem } from '../../app/cartSlice';
import { useDispatch } from 'react-redux';

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
  const [searchText, setSearchText] = useState<string>('');
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);

  const dispatch = useDispatch();
  const handleAddItem = (product: Product) => {
    dispatch(addItem(product));
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data: Product[] = await response.json();
        setProducts(data);
        setDisplayedProducts(data); // Initially, display all products
      } catch (error) {
        console.error('Some error occurred', error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const searchedData = () => {
      const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchText.toLowerCase())
      );
      console.log(filteredProducts);
      setDisplayedProducts(filteredProducts);
    };

    searchedData();
  }, [searchText, products]);

  return (
    <>
      <section className='search w-[90%] mx-auto' id='products'>
        <div className='flex justify-center gap-2 my-4'>
          <input
            type='text'
            placeholder='search your favourite items'
            className='md:w-[60%] w-[100%] p-2 border-slate-500 outline-none bg-slate-700/10 dark:text-slate-200 text-slate-500'
            value={searchText}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSearchText(e.target.value)
            }
          />
        </div>
      </section>
      <section className='w-[90%] mx-auto'>
        <h2 className='mb-8 text-6xl font-bold text-center'>Products</h2>
        <div className='grid grid-cols-1 gap-2 md:grid-cols-4 sm:grid-cols-2'>
          {displayedProducts.map((product) => (
            <div
              key={product.id}
              className='grid grid-cols-1 gap-4 p-4 mb-6 rounded-md shadow-2xl border-slate-400 dark:bg-slate-800'
            >
              <div className='flex justify-center'>
                <img src={product.image} alt='' className='w-[80%] h-40' />
              </div>
              <div className='object-cover text-2xl font-semibold'>
                <Link to={`product/${product.id}`}>
                  {product.title.length > 30
                    ? product.title.slice(0, 30) + '...'
                    : product.title}
                </Link>
              </div>
              <div className='text-xl font-semibold text-rose-500'>{`$${product.price}`}</div>
              <div>{product.description.slice(0, 100) + '...'}</div>
              <div>
                <span className='px-4 py-1 italic font-medium rounded-full bg-rose-500/90'>
                  {product.category}
                </span>
              </div>
              <div className='font-medium'>Rating: {product.rating.rate}</div>
              <div>{product.rating.count} reviews</div>
              <div className='flex justify-center'>
                <button
                  className='flex justify-center p-2 rounded w-30 bg-rose-500/90'
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

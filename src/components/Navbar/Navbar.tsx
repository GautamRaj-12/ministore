import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useTheme from '../../contexts/ThemeContext';
import { RootState } from '../../app/store';

const Navbar: React.FC = () => {
  const { themeMode, lightTheme, darkTheme } = useTheme();
  const handleLightClick = () => {
    if (themeMode === 'dark') {
      lightTheme();
    }
  };

  const cartItems = useSelector((state: RootState) => state.cart.items);

  return (
    <header className='p-5 shadow-xl'>
      <nav className='w-[90%] mx-auto flex justify-between items-center md:flex-row flex-col gap-2'>
        <Link to='/'>
          <h2 className='text-4xl font-semibold font-[pacifico] tracking-wide'>
            Ministore
          </h2>
        </Link>
        <ul className='flex gap-10 px-1 text-xl font-semibold md:px-0'>
          <Link to='/'>
            <li>Home</li>
          </Link>
          <Link to='#'>
            <li>About</li>
          </Link>
          <Link to='#products'>
            <li>Products</li>
          </Link>
          <li>
            <span className='flex'>
              <i className='mr-1 text-xl fa-solid fa-cart-shopping'></i>
              <span>{cartItems.length}</span>
            </span>
          </li>
          <div className='flex items-center justify-center cursor-pointer'>
            {themeMode === 'dark' ? (
              <i className='fa-solid fa-sun' onClick={handleLightClick}></i>
            ) : (
              <i className='fa-solid fa-moon' onClick={darkTheme}></i>
            )}
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

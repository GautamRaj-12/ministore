import { Link } from "react-router-dom";
import useTheme from "../../contexts/ThemeContext";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { themeMode, lightTheme, darkTheme } = useTheme();
  const handleLightClick = () => {
    if (themeMode === "dark") {
      lightTheme();
    }
  };

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <>
      <header className="p-5 shadow-xl">
        <nav className="w-[90%] mx-auto flex md:justify-between justify-center items-center flex-wrap gap-3">
          <Link to="/">
            <h2 className="text-4xl font-semibold font-[pacifico] tracking-wide text-center">
              Ministore
            </h2>
          </Link>
          <ul className="flex gap-10 text-xl font-semibold">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/#products">
              <li>Products</li>
            </Link>
            <Link to="/cart">
              <li className="relative">
                <i className="flex gap-2 text-xl fa-solid fa-cart-shopping"></i>
                <span className="absolute flex items-center justify-center w-4 h-4 text-sm rounded-full -right-2 top-3 bg-rose-500">
                  <p>{cartItems.length}</p>
                </span>
              </li>
            </Link>
            <div className="flex items-center justify-center cursor-pointer">
              {themeMode === "dark" ? (
                <i className="fa-solid fa-sun" onClick={handleLightClick}></i>
              ) : (
                <i className="fa-solid fa-moon" onClick={darkTheme}></i>
              )}
            </div>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;

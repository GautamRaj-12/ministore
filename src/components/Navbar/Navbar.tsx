import { Link } from "react-router-dom";
import useTheme from "../../contexts/ThemeContext";

const Navbar = () => {
  const { themeMode, lightTheme, darkTheme } = useTheme();
  const handleLightClick = () => {
    if (themeMode === "dark") {
      lightTheme();
    }
  };
  return (
    <>
      <header className="p-5 shadow-xl">
        <nav className="w-[90%] mx-auto flex justify-between items-center flex-wrap">
          <Link to="/">
            <h2 className="text-4xl font-semibold font-[pacifico] tracking-wide">
              Ministore
            </h2>
          </Link>
          <ul className="flex gap-10 text-xl font-semibold">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="#">
              <li>About</li>
            </Link>
            <Link to="#products">
              <li>Products</li>
            </Link>
            <li>
              <i className="text-xl fa-solid fa-cart-shopping"></i>
            </li>
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

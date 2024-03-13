import { useState, useEffect } from "react";
import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { ThemeContextProvider } from "./contexts/ThemeContext.ts";
import Products from "./components/Products/Products.tsx";
import Product from "./components/Product/Product.tsx";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Products />} />
        <Route path="/product/:productId" element={<Product />} />
      </>
    )
  );
  const [themeMode, setThemeMode] = useState("light");
  const lightTheme = () => {
    setThemeMode("light");
  };
  const darkTheme = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    const htmlElement = document.querySelector("html");
    if (htmlElement) {
      htmlElement.classList.remove("light", "dark");
      htmlElement.classList.add(themeMode);
    }
  }, [themeMode]);
  return (
    <>
      <ThemeContextProvider value={{ themeMode, lightTheme, darkTheme }}>
        <RouterProvider router={router} />
      </ThemeContextProvider>
    </>
  );
}

export default App;

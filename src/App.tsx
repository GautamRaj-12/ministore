import { useState, useEffect } from 'react';
import './App.css';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { ThemeContextProvider } from './contexts/ThemeContext.ts';
import Product from './components/Product/Product.tsx';
import Home from './pages/Home.tsx';
import { Provider } from 'react-redux';
import store from './app/store.ts';
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<Home />} />
        <Route path='/product/:productId' element={<Product />} />
      </>
    )
  );
  const [themeMode, setThemeMode] = useState('dark');
  const lightTheme = () => {
    setThemeMode('light');
  };
  const darkTheme = () => {
    setThemeMode('dark');
  };

  useEffect(() => {
    const htmlElement = document.querySelector('html');
    if (htmlElement) {
      htmlElement.classList.remove('light', 'dark');
      htmlElement.classList.add(themeMode);
    }
  }, [themeMode]);
  return (
    <>
      <Provider store={store}>
        <ThemeContextProvider value={{ themeMode, lightTheme, darkTheme }}>
          <RouterProvider router={router} />
        </ThemeContextProvider>
      </Provider>
    </>
  );
}

export default App;

import { createTheme } from "@mui/material";
import {createBrowserRouter,} from "react-router-dom";
import ErrorMessage from '../pages/ErrorMessage';
import Root from './Root';
import Products from '../pages/products/Products';
import Product from '../pages/products/modal/ProductModal';
import Orders from '../pages/orders/Orders';
import Catalogues from '../pages/Catalogues';
import Categories from '../pages/categories/Categories';
import Images from '../pages/Images';

function Router() {

    const theme = createTheme({});
    const router = createBrowserRouter([
      {
        path: "/",
        element: <Root />,
        errorElement: <ErrorMessage />,
        children: [
          {
            path: "/products",
            element: <Products />,
          },
          {
            path: "/products/:productId",
            element: <Product />,
          },

          {
            path: "/orders",
            element: <Orders />,
          },
          {
            path: "/catalogues",
            element: <Catalogues />,
          },
          {
            path: "/categories",
            element: <Categories />,
          },
          {
            path: "/images",
            element: <Images />,
          },
        ],
      },
    ]);
    return { theme, router };
}

export default Router;
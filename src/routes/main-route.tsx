import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AuthGuard from "../AuthGuard";
import Login from "../pages/login-page/Login";
import Home from "../pages/home-page/Home";
import NotFound from "../pages/not-found/NotFound";
import HandleCompany from "../pages/handle-company/HandleCompany";
import HandleBrand from "../pages/handle-brand/HandleBrand";
import HandleCategory from "../pages/handle-category/HandleCategory";
import HandleUnit from "../pages/handle-unit/HandleUnit";
import HandleProduct from "../pages/handle-product/HandleProduct";

export enum Routes {
  HOME = "/",
  NOT_FOUND = "*",
  LOGIN = "/login",
  HandleCompany = "/handle-company",
  HandleBrand = "/handle-brand",
  HandleCategory = "/handle-category",
  HandleUnit = "/handle-unit",
  HandleProduct = "/handle-product",
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: Routes.HOME,
        element: (
          <AuthGuard>
            <Home />
          </AuthGuard>
        ),
      },
      {
        path: Routes.NOT_FOUND,
        element: <NotFound />,
      },
      {
        path: Routes.LOGIN,
        element: <Login />,
      },
      {
        path: Routes.HandleCompany,
        element: (
          <AuthGuard>
            <HandleCompany />
          </AuthGuard>
        ),
      },
      {
        path: Routes.HandleBrand,
        element: (
          <AuthGuard>
            <HandleBrand />
          </AuthGuard>
        ),
      },
      {
        path: Routes.HandleCategory,
        element: (
          <AuthGuard>
            <HandleCategory />
          </AuthGuard>
        ),
      },
      {
        path: Routes.HandleUnit,
        element: (
          <AuthGuard>
            <HandleUnit />
          </AuthGuard>
        ),
      },
      {
        path: Routes.HandleProduct,
        element: (
          <AuthGuard>
            <HandleProduct />
          </AuthGuard>
        ),
      },
    ],
  },
]);

export default appRouter;

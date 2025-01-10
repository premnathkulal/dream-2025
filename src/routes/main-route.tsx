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
import HandleTaxMaster from "../pages/handle-tax-master/handleTaxMaster";
import { RoutesList } from "../utils/master-menu";
import ViewCompanyBrand from "../pages/view-company-brand/ViewCompanyBrand";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: RoutesList.HOME,
        element: (
          <AuthGuard>
            <Home />
          </AuthGuard>
        ),
      },
      {
        path: RoutesList.NOT_FOUND,
        element: <NotFound />,
      },
      {
        path: RoutesList.LOGIN,
        element: <Login />,
      },
      {
        path: RoutesList.HandleCompany,
        element: (
          <AuthGuard>
            <HandleCompany />
          </AuthGuard>
        ),
      },
      {
        path: RoutesList.HandleBrand,
        element: (
          <AuthGuard>
            <HandleBrand />
          </AuthGuard>
        ),
      },
      {
        path: RoutesList.HandleCategory,
        element: (
          <AuthGuard>
            <HandleCategory />
          </AuthGuard>
        ),
      },
      {
        path: RoutesList.HandleUnit,
        element: (
          <AuthGuard>
            <HandleUnit />
          </AuthGuard>
        ),
      },
      {
        path: RoutesList.HandleProduct,
        element: (
          <AuthGuard>
            <HandleProduct />
          </AuthGuard>
        ),
      },
      {
        path: `${RoutesList.HandleTaxMaster}/:taxType`,
        element: (
          <AuthGuard>
            <HandleTaxMaster />
          </AuthGuard>
        ),
      },
      {
        path: `${RoutesList.ViewCompanyBrand}`,
        element: (
          <AuthGuard>
            <ViewCompanyBrand />
          </AuthGuard>
        ),
      },
    ],
  },
]);

export default appRouter;

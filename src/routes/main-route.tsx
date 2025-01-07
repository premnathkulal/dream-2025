import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AuthGuard from "../AuthGuard";
import Login from "../pages/login-page/Login";
import Home from "../pages/home-page/Home";
import NotFound from "../pages/not-found/NotFound";
import CreateCompany from "../pages/create-company/CreateCompany";
import CreateBrand from "../pages/create-brand/CreateBrand";
import CreateCategory from "../pages/create-category/CreateCategory";
import CreateUnit from "../pages/create-unit/CreateUnit";

export enum Routes {
  HOME = "/",
  NOT_FOUND = "*",
  LOGIN = "/login",
  CreateCompany = "/create-company",
  CreateBrand = "/create-brand",
  CreateCategory = "/create-category",
  CreateUnit = "/create-unit",
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
        path: Routes.CreateCompany,
        element: (
          <AuthGuard>
            <CreateCompany />
          </AuthGuard>
        ),
      },
      {
        path: Routes.CreateBrand,
        element: (
          <AuthGuard>
            <CreateBrand />
          </AuthGuard>
        ),
      },
      {
        path: Routes.CreateCategory,
        element: (
          <AuthGuard>
            <CreateCategory />
          </AuthGuard>
        ),
      },
      {
        path: Routes.CreateUnit,
        element: (
          <AuthGuard>
            <CreateUnit />
          </AuthGuard>
        ),
      },
    ],
  },
]);

export default appRouter;

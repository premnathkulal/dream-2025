import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AuthGuard from "../AuthGuard";
import Login from "../pages/login-page/Login";
import Home from "../pages/home-page/Home";
import NotFound from "../pages/not-found/NotFound";
import CreateCompany from "../pages/create-company/CreateCompany";
import CreateBrand from "../pages/create-brand/CreateBrand";

export enum Routes {
  HOME = "/",
  NOT_FOUND = "*",
  LOGIN = "/login",
  CreateCompany = "/create-company",
  CreateBrand = "/create-brand",
  CreateCategory = "/create-category",
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
            <div>Create Category</div>
          </AuthGuard>
        ),
      },
    ],
  },
]);

export default appRouter;

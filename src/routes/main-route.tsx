import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AuthGuard from "../AuthGuard";
import Login from "../pages/login-page/Login";
import Home from "../pages/home-page/Home";
import NotFound from "../pages/not-found/NotFound";

export enum Routes {
  HOME = "/",
  LOGIN = "/login",
  NOT_FOUND = "*",
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
        path: Routes.LOGIN,
        element: <Login />,
      },
      {
        path: Routes.NOT_FOUND,
        element: <NotFound />,
      },
    ],
  },
]);

export default appRouter;

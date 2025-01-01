import "./index.scss";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import appRouter from "./routes/main-route";
import appStore from "./store/app-store.ts";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  </StrictMode>
);

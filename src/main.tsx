import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Router from "./routes/index.tsx";
import ThemeProvider from "./theme/index.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";

const { router } = Router();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

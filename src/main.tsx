import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";

import { persistor, Store } from "./state/store";

createRoot(document.getElementById("root")!).render(
  <PersistGate loading={null} persistor={persistor}>
    <Provider store={Store}>
      <HelmetProvider>
        <BrowserRouter>
          <StrictMode>
            <App />
          </StrictMode>
        </BrowserRouter>
      </HelmetProvider>
    </Provider>
  </PersistGate>,
);

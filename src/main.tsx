import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import ContextProvider from "./Context/RecipeProvider.tsx";
createRoot(document.getElementById("root")!).render(
  <ContextProvider>
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </ContextProvider>
);

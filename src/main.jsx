import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { ContexTareaProveedor } from "./Contexto/ContextoTarea";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContexTareaProveedor>
      <App />
    </ContexTareaProveedor>
  </StrictMode>
);

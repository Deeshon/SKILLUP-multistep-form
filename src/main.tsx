import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ApplicationContextProvider } from "./ApplicationContextProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <ApplicationContextProvider>
    <div className="h-full sm:flex sm:justify-center sm:items-center">
      <App />
    </div>
  </ApplicationContextProvider>
);

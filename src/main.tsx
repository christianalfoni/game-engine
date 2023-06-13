import "reflect-metadata";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ServiceProvider } from "impact-app";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ServiceProvider>
      <Suspense fallback={<h1>Loading...</h1>}>
        <App />
      </Suspense>
    </ServiceProvider>
  </React.StrictMode>
);

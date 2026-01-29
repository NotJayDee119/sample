import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.jsx";
import "./index.css";

// Support both standalone (#root) and WordPress (#pro-contractors-root) mounting
const rootElement = document.getElementById("root") || document.getElementById("pro-contractors-root");

console.log("Procontractors: Checking for mount point...");
console.log("Root element:", rootElement);
console.log("Element ID:", rootElement?.id);

if (rootElement) {
  console.log("Procontractors: Mounting React app...");
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </React.StrictMode>
  );
  console.log("Procontractors: React app mounted successfully!");
} else {
  console.error("Procontractors: Could not find root element! Looking for #root or #pro-contractors-root");
}

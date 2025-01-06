import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Ton composant principal
import dotenv from "dotenv";
const connectDB = require("./config/db");

dotenv.config(); // Charge les variables d'environnement

// Fonction principale pour démarrer l'application
const startApp = async () => {
  await connectDB(); // Connecte-toi à MongoDB
  console.log("L'application est connectée à MongoDB !");
};

startApp();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

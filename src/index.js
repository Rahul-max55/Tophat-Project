import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import NoteContext from "./cardContext/NoteContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <NoteContext>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </NoteContext>
);

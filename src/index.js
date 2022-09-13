import React from "react";
import { createRoot } from "react-dom/client";

import "./assets/styles/style.css";
import NoteApp from "./scripts/NoteApp";

const root = createRoot(document.getElementById("root"));
root.render(<NoteApp />);

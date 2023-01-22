import React from "react";
import { createRoot } from 'react-dom/client';

import App from "./App";
import "./index.css";

//project based off this figma design
//https://www.figma.com/file/lz9lLpFHMxHm2odnwM3R0z/gpt3?node-id=0%3A1

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "@fontsource/urbanist/300.css";
import "@fontsource/urbanist/400.css";
import "@fontsource/urbanist/500.css";
import "@fontsource/urbanist/700.css";
import "@fontsource/epilogue/300.css";
import "@fontsource/epilogue/400.css";
import "@fontsource/epilogue/500.css";
import "@fontsource/archivo-black/400.css";
import "@fontsource/dm-mono/400.css";
import "@fontsource/dm-mono/500.css";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);

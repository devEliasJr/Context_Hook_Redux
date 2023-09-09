import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { CssBaseline, ThemeProvider } from "@mui/material";
import darkTheme from "./styles/Dark.ts";
import { PostsProvider } from "./Contexts/dataContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PostsProvider>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </PostsProvider>
  </React.StrictMode>
);

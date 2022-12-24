import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import "./index.css";

const colors = {
  brand: {
    100: "#F2F6FA",
    200: "#2E5984",
    300: "#00008B",
    400: "#FFC500",
    500: "#DC143C",
    600: "#2F863F",
    700: "#D9D9D9",
    800: "#91BAD6",
    900: "#D07579",
  },
  primary: {
    100: "#eaeaea",
    200: "#454545",
  },
};

const theme = extendTheme({ colors });

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

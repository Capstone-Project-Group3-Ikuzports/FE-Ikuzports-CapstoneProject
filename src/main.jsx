import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { CookiesProvider } from "react-cookie";
import { persistStore } from "redux-persist";

import App from "./App";
import "./index.css";
import store from "./redux/store";
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
    300: "#0000e5",
    400: "#4483c2",
    500: "#ff1443",
    600: "#3ba74f",
  },
};

const theme = extendTheme({
  colors,
  fonts: {
    heading: `'Montserrat', sans-serif`,
    body: `'Montserrat', sans-serif`,
  },
});

let persistor = persistStore(store);

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <CookiesProvider>
          <ChakraProvider theme={theme}>
            <App />
          </ChakraProvider>
        </CookiesProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

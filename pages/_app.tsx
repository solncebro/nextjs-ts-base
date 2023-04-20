import { ThemeProvider } from "@emotion/react";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import { store } from "./store";
import { themeMain } from "./theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={themeMain}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

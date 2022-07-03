import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

import Fonts from "../styles/fonts";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;

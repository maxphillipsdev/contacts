import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import appTheme from "../lib/theme";
import AppShell from "../components/AppShell";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={appTheme}>
      <AppShell>
        <Component {...pageProps} />
      </AppShell>
    </ChakraProvider>
  );
}
export default MyApp;

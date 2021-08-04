import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import appTheme from "../lib/theme";
import AppShell from "../components/shell/AppShell";
import Head from "next/head";

import ContactsDB from "../lib/db";
import { useEffect, useState } from "react";

// TODO: Refactor to use a context provider.

function MyApp({ Component, pageProps }: AppProps) {
  const [db, setDb] = useState<ContactsDB | null>(null);
  useEffect(() => {
    if (!db) {
      setDb(new ContactsDB());
    }
    return () => {};
  }, [db]);

  if (!db) {
    return null;
  }

  return (
    <ChakraProvider theme={appTheme}>
      <Head>
        <title>Contacts</title>
      </Head>
      <AppShell db={db}>
        <Component {...pageProps} db={db} />
      </AppShell>
    </ChakraProvider>
  );
}
export default MyApp;

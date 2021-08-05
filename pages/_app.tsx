import { ChakraProvider, Spinner } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect, useState } from "react";
import AppShell from "../components/shell/AppShell";
import DBContext, { ContactsDB } from "../lib/db";
import appTheme from "../lib/theme";

function MyApp({ Component, pageProps }: AppProps) {
  const [db, setDb] = useState<ContactsDB | null>(null);

  useEffect(() => {
    if (!db) {
      setDb(new ContactsDB());
    }
    return () => {};
  }, [db]);

  return (
    <ChakraProvider theme={appTheme}>
      <DBContext.Provider value={db}>
        <Head>
          <title>Contacts</title>
        </Head>
        {db ? (
          <AppShell>
            <Component {...pageProps} />
          </AppShell>
        ) : (
          <Spinner />
        )}
      </DBContext.Provider>
    </ChakraProvider>
  );
}
export default MyApp;

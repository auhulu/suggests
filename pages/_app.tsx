import "@mantine/core/styles.css";
import Head from "next/head";
import { Container, MantineProvider } from "@mantine/core";
import { theme } from "../theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function App({ Component, pageProps }: any) {
  return (
    <MantineProvider theme={theme}>
      <Head>
        <title>Suggests Scraper</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Container my="xl">
          <Component {...pageProps} />
        </Container>
      </QueryClientProvider>
    </MantineProvider>
  );
}

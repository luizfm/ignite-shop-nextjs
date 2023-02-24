import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { globalStyles, ROBOTO } from "@/styles/global";
import { Container } from "@/styles/pages/app";
import Header from "@/components/header";

globalStyles();

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Container>
        <style jsx global>{`
          html {
            font-family: ${ROBOTO.style.fontFamily};
          }
        `}</style>
        <Header />

        <Component {...pageProps} />
      </Container>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

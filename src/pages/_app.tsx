import "@/styles/globals.scss";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { useState } from "react";
import RootLayout from "../components/layouts/root-layout";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <SessionProvider session={session}>
          <ThemeProvider enableSystem={true} attribute="class">
            <RootLayout>
              <Component {...pageProps} />
            </RootLayout>
          </ThemeProvider>
        </SessionProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}

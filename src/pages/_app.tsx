import "@/styles/globals.scss";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import RootLayout from "../components/layouts/root-layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </ThemeProvider>
  );
}

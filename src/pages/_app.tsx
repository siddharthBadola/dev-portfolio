import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cursor from "@/components/Cursor";
import Head from "next/head";
import Navbar from "@/components/navbar";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] });

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <Cursor />
        <main className={inter.className}>
          <Head>
            <meta name="description" content="Portfolio" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Navbar />
          <Component {...pageProps} />
        </main>
        <ToastContainer />
      </ThemeProvider>
    </SessionProvider>
  );
};

export default MyApp;

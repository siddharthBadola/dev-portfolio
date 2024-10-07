import MainPage from "@/components/mainPage";
import { SUBJECT_DATA } from "@/config/constants";
import Head from "next/head";

export default function App() {
  return (
    <>
      <Head>
        <title>{SUBJECT_DATA.name}'s Portfolio</title>
      </Head>
      <MainPage />
    </>
  );
}

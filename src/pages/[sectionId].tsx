import MainPage from "@/components/mainPage";
import { SUBJECT_DATA } from "@/config/constants";
import Head from "next/head";
import ErrorPage from "next/error";
import { SECTIONS } from "@/config/appConfig";

interface SectionPageProps {
  sectionId: string;
  isValidSection?: boolean;
}

export default function SectionPage({
  sectionId,
  isValidSection,
}: SectionPageProps) {
  if (!isValidSection) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <Head>
        <title>
          {SUBJECT_DATA.name}'s Portfolio | {sectionId}
        </title>
      </Head>
      <MainPage />
    </>
  );
}

export const getServerSideProps = async (context: any) => {
  const { sectionId } = context.params;

  const isValidSection = Object.values(SECTIONS).includes(`/${sectionId}`);

  if (!isValidSection) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      sectionId,
      isValidSection,
    },
  };
};

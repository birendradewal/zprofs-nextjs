import Head from "next/head";

const Seo = ({ title, metaDisc }) => {
  return (
    <>
      <Head>
        <title>{title} - Zprofs</title>
        <meta name="description" content={metaDisc} />
        <link rel="icon" href="/logo.ico" />
      </Head>
    </>
  );
};

export default Seo;

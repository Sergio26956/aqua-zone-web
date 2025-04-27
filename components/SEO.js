import Head from 'next/head';

const SEO = ({ title, description }) => {
  return (
    <Head>
      <title>{title ? `${title} | AQUAZONE` : 'AQUAZONE'}</title>
      <meta name="description" content={description || 'Explora AQUAZONE'} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
    </Head>
  );
};

export default SEO;

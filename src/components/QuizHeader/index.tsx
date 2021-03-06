import React from 'react';
import Head from 'next/head';

export default function QuizHeader({ props }: any) {
  const { title, bg, author, icon } = props;
  return (
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta charSet="UTF-8" />

      <title>{title}</title>
      <meta property="og:description" content="Dota 2 Quiz | Imersão React + Next Js Alura" />
      <meta property="og:url" content="https://tsquiz.vercel.app/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />

      <meta property="og:image" content={bg} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="800" />
      <meta property="og:image:height" content="600" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="https://tsquiz.vercel.app/" />
      <meta property="twitter:url" content="https://tsquiz.vercel.app/" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content="Dota 2 Quiz | Imersão React + Next Js Alura" />
      <meta name="twitter:image" content={bg} />

      <meta name="keywords" content="HTML, CSS, JavaScript" />
      <meta property="article:author" content={author} />
      <link rel="icon" type="image/png" href={icon} />
    </Head>
  );
}

import Head from "next/head";

export function QuizHeader({ props }: any) {
  return (
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta charSet="UTF-8" />

      <title>{props.title}</title>
      <meta
        property="og:description"
        content="Dota 2 Quiz | Imersão React + Next Js Alura"
      />
      <meta property="og:url" content="https://tsquiz.vercel.app/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={props.title} />

      <meta property="og:image" content={props.bg} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="https://tsquiz.vercel.app/" />
      <meta property="twitter:url" content="https://tsquiz.vercel.app/" />
      <meta name="twitter:title" content={props.title} />
      <meta
        name="twitter:description"
        content="Dota 2 Quiz | Imersão React + Next Js Alura"
      />
      <meta name="twitter:image" content={props.bg} />

      <meta name="keywords" content="HTML, CSS, JavaScript" />
      <meta property="article:author" content={props.author} />
      <link rel="icon" type="image/png" href={props.icon} />
    </Head>
  );
}

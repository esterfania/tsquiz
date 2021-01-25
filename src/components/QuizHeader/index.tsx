import { AppProps } from "next/dist/next-server/lib/router/router";
import Head from "next/head";

export function QuizHeader({ props }: any) {
  return (
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta charSet="UTF-8" />
      <meta property="og:image" content={props.bg} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="800" />
      <meta property="og:image:height" content="600" />
      <meta property="og:title" content={props.title} key="title" />
      <meta
        property="og:description"
        content="Dota 2 Quiz | Imersão React + Next Js Alura"
      />
      <meta name="keywords" content="HTML, CSS, JavaScript" />
      <meta property="article:author" content={props.author} />
      <link rel="icon" type="image/png" href={props.icon} />
    </Head>
  );
}

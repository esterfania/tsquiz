import {
  QuizBackground,
  QuizContainer,
  Widget,
  Footer,
  GitHubCorner,
  QuizLogo,
  QuizInput,
} from "../src/components";
import db from "../db.json";
import Head from "next/head";

export default function Quiz() {
  return (
    <>
      <Head>
        <meta property="og:image" content={db.bg} />
        <title>{db.title}</title>
        <meta property="og:title" content={db.title} key="title" />
        <meta
          name="description"
          content="Dota 2 Quiz | Imersão React + Next Js Alura"
        />
        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <meta name="author" content="Ester Gama" />
        <link rel="icon" type="image/png" href={db.icon} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <QuizLogo />
          <Widget>
            <Widget.Header>
              <h1>{db.title}</h1>
            </Widget.Header>
            <Widget.Content>
              <p>{db.description}</p>
              <QuizInput></QuizInput>
            </Widget.Content>
          </Widget>
          <Widget>
            <Widget.Content>
              <h1>Quizes da galera</h1>
              <p>{db.description}</p>
            </Widget.Content>
          </Widget>
          <Footer />
          <GitHubCorner projectUrl="https://github.com/esterfania/tsquiz" />
        </QuizContainer>
      </QuizBackground>
    </>
  );
}

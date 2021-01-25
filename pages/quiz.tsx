import {
  QuizBackground,
  QuizContainer,
  Widget,
  Footer,
  GitHubCorner,
} from "../src/components";
import db from "../db.json";
import Head from "next/head";

export default function Quiz() {
  return (
    <>
      <Head>
        <meta property="og:image" content={db.bg} />
        <title>Dota 2 Quiz</title>
        <link rel="icon" type="image/png" href="https://i.pinimg.com/originals/c1/ec/da/c1ecda477bc92b6ecfc533b64d4a0337.png"/>
      </Head>
      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <Widget>
            <Widget.Header>
              <h1>Dota 2</h1>
            </Widget.Header>
            <Widget.Content>
              <p>AHSDFASIDFHAHSDFHA AJSDFHAahsdfhasd</p>
            </Widget.Content>
          </Widget>
          <Widget>
            <Widget.Header>
              <h1>Dota 2</h1>
            </Widget.Header>
            <Widget.Content>
              <p>AHSDFASIDFHAHSDFHA AJSDFHAahsdfhasd</p>
            </Widget.Content>
          </Widget>
          <Footer />
          <GitHubCorner projectUrl="https://github.com/esterfania/tsquiz" />
        </QuizContainer>
      </QuizBackground>
    </>
  );
}

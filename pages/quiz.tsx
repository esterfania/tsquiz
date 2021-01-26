import {
  QuizBackground,
  QuizContainer,
  Widget,
  Footer,
  GitHubCorner,
  QuizLogo,
  QuizInput,
  QuizButton,
} from "../src/components";
import db from "../db.json";

export default function Quiz() {
  return (
    <>
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
              <QuizButton>JOGAR</QuizButton>
            </Widget.Content>
          </Widget>
          <Widget>
            <Widget.Content>
              <h1>Quizes da galera</h1>
              <p>{db.description}</p>
            </Widget.Content>
          </Widget>
          <Footer />
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/esterfania/tsquiz" />
      </QuizBackground>
    </>
  );
}

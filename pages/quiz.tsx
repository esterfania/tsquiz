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
import { QuizHeader } from "../src/components/QuizHeader";

export default function Quiz() {
  return (
    <>
      <QuizHeader props={db}></QuizHeader>
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

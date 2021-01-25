import { BackgroundImage, QuizContainer, Widget } from "../src/components";

export default function Home() {
  return (
    <BackgroundImage>
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
      </QuizContainer>
    </BackgroundImage>
  );
}

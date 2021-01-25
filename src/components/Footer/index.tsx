import styled from "styled-components";

const FooterWrapper = styled.footer`
  background-color: #686886b3;
  padding: 20px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  img {
    width: 58px;
    margin-right: 23px;
  }
  a {
    color: ${({ theme }) => theme.colors.light};
    text-decoration: none;
    transition: 0.3s;
    &:hover,
    &:focus {
      opacity: 0.5;
    }
    span {
      text-decoration: underline;
    }
  }
`;

export function Footer(props: any) {
  return (
    <FooterWrapper {...props}>
      <a href="https://www.alura.com.br/">
        <img
          src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg"
          alt="Logo Alura"
        />
      </a>

      <p>
        Criado durante a{" "}
        <a href="https://www.alura.com.br/">
          <span>Imersão React da Alura</span>
        </a>{" "}
        por{" "}
        <a href="https://github.com/esterfania">
          <span>@esterfania</span>
        </a>
      </p>
    </FooterWrapper>
  );
}

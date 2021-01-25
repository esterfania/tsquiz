import styled from "styled-components";
import db from "../../../db.json";

export const BackgroundImage: any = styled.div`
  background-image: url(${db.bg});
  flex: 1;
  background-position: center;
  background-size: cover;
`;

import * as S from "./style";
import { Link } from "react-router-dom";

import Subtitle from "../Subtitle/index";

const Subscribe = () => {
  return (
    <S.Subscribe id="subscribe">
      <Subtitle subtitle="Inscreva-se e saiba mais sobre Oppenheimer" />
      <p>É bem rápido. Só mais alguns instantes!</p>
      <Link to="stepform1">Inscreva-se</Link>
    </S.Subscribe>
  );
};

export default Subscribe;

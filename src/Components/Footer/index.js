import * as S from "./style";

import Image from "../Image/index";
import logo  from "../../images/logo.png";
import uni from "../../images/uni.png";
import { Logo } from "../Home/style";

const MainSection = () => {
  return (
    <S.Footer>
      <div>
        <p>
          © 2023 Universal Studios. Todos os direitos
          reservados ©
        </p>
        <small>
          Projeto desenvolvido por{" "}
          <a href="https://portifolio-lbhe.vercel.app/">
            Ronald Da Silva
          </a>
        </small>
      </div>
      <S.Images>
        <Image src={logo}/>
        <Image src={uni} />
      </S.Images>
    </S.Footer>
  );
};

export default MainSection;

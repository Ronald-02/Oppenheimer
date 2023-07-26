import * as S from "./style";

import logo from "../../images/logo.png";

import Header from "../Header/index";
import NextSectionButton from "../NextSectionButton";
import Image from "../Image/index";

const Home = () => {
  return (
    <S.Home id="home">
      <Header />
      <S.Logo>
        <Image src={logo} />
      </S.Logo>
      <S.Container>
        <h1>Conheça o Pai Da Bomba Atômica</h1>
        <h2>
          Acompanhe a trajetória de J.Robert Oppenheimer, o físico e cientista que criou a arma capaz de acabar com a Segunda Guerra Mundial.
        </h2>
        <NextSectionButton />
      </S.Container>
    </S.Home>
  );
};

export default Home;

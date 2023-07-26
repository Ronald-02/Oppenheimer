import * as S from "./style";
import opieinImage from "../../images/opiein.png";
import bag from "../../images/bag.png";

import Subtitle from "../Subtitle";
import Image from "../Image";

const AboutSection = () => {
  return (
    <S.AboutSection id="about">
      <S.ImageBg></S.ImageBg>
      <S.Info>
        <Subtitle subtitle="Quem Foi Robert Oppenheimer?" />
        <p>
          J. Robert Oppenheimer nasceu em 1904, na cidade de Nova York. Brilhante desde muito jovem, o físico se formou com louvor na prestigiada universidade de Harvard, em 1925, e agregou mais e mais títulos e competências ao longo dos anos seguintes..
        </p>
        <p>
          Contemporâneo de estudiosos como Niels Bohr (você certamente lembra das aulas de física na escola) e o próprio Albert Einstein, Oppenheimer ajudou a avançar o conhecimento sobre a física quântica, mas a genialidade do homem acabou famosa por um motivo mais impactante e nefasto.
        </p>
        <S.Button>
          Acompanhar<img src={bag} />
        </S.Button>
      </S.Info>
      <S.Image>
        <Image src={opieinImage} />
      </S.Image>
    </S.AboutSection>
  );
};

export default AboutSection;

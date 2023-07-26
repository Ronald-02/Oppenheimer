import * as S from "./style";
import Wallpaper1 from "../../images/wallpaper-1.png";
import Wallpaper2 from "../../images/wallpaper-2.png";
import Wallpaper3 from "../../images/wallpaper-3.png";

import Subtitle from "../Subtitle";
import Image from "../Image";

const ResourcesSection = () => {
  return (
    <S.ResourcesSection>
      <Subtitle subtitle="Fatos Principais" />
      <S.Container>
        <S.Card>
          <Image src={Wallpaper1} />
          <h3>A trajetória de Oppenheimer</h3>
          <p>
            Concluídos os seus primeiros anos de formação na Ethical Culture Society School, em Nova Iorque, os seus problemas de saúde fizeram com que entrasse na Universidade de Harvard com um ano de atraso,
            o qual compensou licenciando-se em química em apenas três anos, com as mais altas distinções.
            Em Harvard, interessou-se por termodinâmica e física experimental. Uma vez que ainda não existiam nos Estados Unidos da América instituições com reconhecimento internacional no ensino desta última, Oppenheimer prosseguiu os seus estudos na Europa. Foi assim que ingressou nos Laboratórios Cavendish da Universidade de Cambridge, dirigidos pelo físico Ernest Rutherford, onde devido à sua pouca destreza no laboratório decidiu direccionar a sua carreira para a física teórica.
            O seu passo seguinte foi rumo à Universidade de Gottingen, que era na altura um dos centros mais reconhecidos no campo da física teórica da Europa, onde conviveu com alguns dos físicos mais notáveis da época, como Niels Borh e Paul Dirac, e onde fez importantes contributos para o então recente campo da física quântica, concluindo o seu doutoramento aos 22 anos.
            Regressou aos Estados Unidos da América, e à Universidade de Harvard, em 1927. Apenas um ano mais tarde, iniciou a sua carreira como docente no Instituto Tecnológico da Califórnia – Cal Tech – e na Universidade da Califórnia, em Berkeley.

          </p>
        </S.Card>
        <S.Card>
          <Image src={Wallpaper2} />
          <h3>Primeiras Investigações</h3>
          <p>
          As primeiras investigações de Oppenheimer focaram-se nos processos energéticos das partículas subatómicas, incluindo electrões, positrões e raios cósmicos. Também realizou trabalhos inovadores sobre estrelas de neutrões e buracos negros, espectroscopia e teoria quântica de campos. Além dos seus feitos académicos, Oppenheimer foi responsável pela excepcional formação de uma geração de físicos norte-americanos, que foram motivados pelas suas qualidades de liderança e independência intelectual. No entanto, como acima mencionado, 
          a vida do físico também foi marcada em diversas ocasiões por períodos de depressão, tendência para a auto-destruição e outros problemas psicológicos, embora tal não o tenha impedido de se tornar um dos físicos mais notáveis de todos os tempos.
          </p>
        </S.Card>
        <S.Card>
          <Image src={Wallpaper3} />
          <h3>Da Ciência à política e vice-versa.</h3>
          <p>
          A vida de Oppenheimer, como a de muitas personagens do seu tempo, 
          foi fortemente marcada pelo contexto político. Devido à sua ascendência alemã, o seu primeiro interesse pela política foi motivado pela subida de Hitler ao poder na Alemanha em 1936.
          Em 1937, com o falecimento do pai, Oppenheimer herdou uma fortuna que destinou em parte a apoiar a facção republicana da Guerra Civil Espanhola. Foi uma época em que Oppenheimer namoriscou com o comunismo e que viria a condicionar o seu futuro. Contudo, rapidamente renegou esses ideais ao ver a forma como Estaline tratou muitos dos seus colegas de profissão russos, que acabaram em gulags e sharashkas soviéticos.
          Após a invasão da Polónia, em 1939, surgiu entre cientistas como Oppenheimer, Albert Einstein, Leo Szilard e Eugene Wigner, entre outros, a necessidade de inventar a bomba atómica antes dos nazis, que já tinham dado rédea solta ao desenvolvimento do Projecto Urânio com essa finalidade.
          Neste contexto, não foi difícil reunir algumas das mentes mais privilegiadas dos EUA e da Europa, as quais, correndo contra os alemães para construir a primeira bomba atómica, se reuniram em torno do Projecto Manhattan, pondo-se ao serviço de Oppenheimer, nomeado director científico do projecto, apesar das reticências de diversos comandantes do Pentágono devido às suas anteriores ligações esquerdistas.
          Com efeito, ao longo dos anos seguintes, Oppenheimer foi constantemente investigado pelo FBI e pelo departamento de segurança interna do Projecto Manhattan. Não obstante, devido ao seu papel essencial e imprescindível durante todo o projecto, nunca foi destituído do cargo.
          </p>
        </S.Card>
      </S.Container>
    </S.ResourcesSection>
  );
};

export default ResourcesSection;

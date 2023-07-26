import React from "react";
import * as S from "./style";

import Subtitle from "../Subtitle/index";
import Image from "../Image";

const costumes = [
  {
    id: 0,
    name: "Oppenheimer e seus integrantes",
    url: "https://cloudfront-eu-central-1.images.arcpublishing.com/liberation/2XGXWNYHXZTPUOQKFEWYTKRENA.jpg"
  },
  {
    id: 1,
    name: "Descoberta da energia nuclear",
    url:"https://caracol.com.co/resizer/JkN3rxHVshePqQgEIBwgcoS8vYo=/1600x1067/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/prisaradioco/O5KWXXLVURAFLCKNZN5AEUPIEA.jpg"
  },
  {
    id: 2,
    name: "General Leslie R. Groves e Oppenheimer",
    url: "https://www.infobae.com/new-resizer/SdZdTTbT8GDCOcwUtznJ0xwVSig=/arc-anglerfish-arc2-prod-infobae/public/BAF4HPUW25EPJDTHXSUAG3BQNA.jpg"
  },
  {
    id: 3,
    name: "",
    url: "https://www.nit.pt/wp-content/uploads/2022/03/3b1092a570ae56dfb3c73ca7ecced072.jpg"
  },
  {
    id: 4,
    name: "Primeira Explosão",
    url: "https://imagenes.elpais.com/resizer/VdoEXegkQUZNTy6s0qIOy8ApwsQ=/1960x1470/cloudfront-eu-central-1.images.arcpublishing.com/prisa/LYARZRPZGFCTLHNRQEE3TESSYA.jpg"
  },
  {
    id: 5,
    name: "Testes Finais de Trinity",
    url: "https://img.asmedia.epimg.net/resizer/MyT0NRH27czFJzAFQdTBcMBeJGA=/1200x1200/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/PVE4TZBAWZLWNAYSO3JRB2KCLU.jpg"
  },
  {
    id: 6,
    name: "Trinity",
    url:"https://www.atomicarchive.com/history/trinity/img/jumbo-4.jpg"
  },
  {
    id: 7,
    name: "Explosão De Trinity",
    url: "https://static.nationalgeographic.es/files/styles/image_3200/public/gettyimages-114124918.webp?w=1600&h=900"
  },
  {
    id: 8,
    name: "",
    url: "https://tecnodefesa.com.br/wp-content/uploads/2018/07/Trinity_Test_Fireball_25ms.jpg"
  },
  {
    id: 9,
    name: "",
    url:"https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/03/07164235/Sadae-Kasoaka-Testigo-del-bombardeo-de-Hiroshima-Informes.jpg"
  },
  {
    id: 10,
    name: "",
    url: "https://cloudfront-us-east-1.images.arcpublishing.com/copesa/5P4E4HCBSBGRTFBDO2TJCNJWYI.jpg"
  },
  {
    id: 11,
    name: "Trinity sendo levada para bombardear Hiroshima e Nagasaki",
    url: "https://blog.ofitexto.com.br/wp-content/uploads/2023/03/2018_08_15-Caracteristicas-e-efeitos-das-bombas-atomicas-lancadas-no-Japao-FISICA-2-scaled.jpg"
  },
  {
    id: 12,
    name: "Hiroshima e Nagasaki bombardeadas pelo USA",
    url:"https://imagenes.elpais.com/resizer/S2Rh4_laWxAp7aZwEX3HCD35S54=/1960x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/XWK7XHS2U7FEQ2JRTKYAQA6L7Y.jpg"
  },
  {
    id: 13,
    name: "",
    url:"https://s.libertaddigital.com/2020/08/05/1920/1080/fit/hiroshima.jpg"
  },
  {
    id: 14,
    name: "",
    url:"https://fotografias.larazon.es/clipping/cmsimages02/2022/11/26/B0076CE0-9F9D-461B-B527-893405630F2F/98.jpg?crop=1600,900,x0,y100&width=1900&height=1069&optimize=low&format=webply"
  },
  {
    id: 15,
    name: "",
    url:"https://cloudfront-eu-central-1.images.arcpublishing.com/prisa/B5CVCP6L4RAS5OEWZCUCTAGDO4.jpg"
  },
  {
    id: 16,
    name: "Muitos pessoas mortas e feridas",
    url: "https://s2.glbimg.com/g__t4abzpaB2qC35sJZ4urletQo=/e.glbimg.com/og/ed/f/original/2019/08/05/gettyimages-615308746.jpg"
  },
  {
    id: 17,
    name: "",
    url:"https://news.files.bbci.co.uk/include/vjamericas/426-hiroshima-anniversary/assets/app-project-assets/img/outcome_photo_2.jpg?cb=1.0.0?cb=1.0.0"
  },
  {
    id: 18,
    name: "Oppenheimer temia ser a morte e a destruição pela tragédia.",
    url:"https://people.com/thmb/90_T5YkZJbWVVeoj19ZNt-h17x8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(975x548:977x550)/j-robert-oppenheimer-1-05a67863f4004a2d84e98c8abe58b3cd.jpg"
  }
];

const CostumesSection = () => {
  const [active, setActive] = React.useState(0);
  const [position, setPosition] = React.useState(0);
  const contentRef = React.useRef();

  React.useEffect(() => {
    const { width } = contentRef.current.getBoundingClientRect();
    setPosition(-(width * active));
  }, [active]);

  function slidePrev() {
    if (active > 0) setActive(active - 1);
  }

  function slideNext() {
    if (active < costumes.length - 1) setActive(active + 1);
  }

  return (
    <S.CostumesSection id="project">
      <Subtitle subtitle="Projeto Manhattan" />
      <S.Container>
        <S.Slider
          ref={contentRef}
          style={{
            transform: `translateX(${position}px)`,
            transition: ".5s ease"
          }}
        >
          {costumes.map((costume) => (
            <S.Slide key={costume.id}>
              <Image src={costume.url} />
              <h1>{costume.name}</h1>
            </S.Slide>
          ))}
        </S.Slider>
      </S.Container>
      <S.Nav>
        <button onClick={slidePrev}>&#129152;</button>
        <button onClick={slideNext}>&#129154;</button>
      </S.Nav>
    </S.CostumesSection>
  );
};

export default CostumesSection;

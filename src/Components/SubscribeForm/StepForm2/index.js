import * as S from "./style";
import { useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { useForm } from "../../../Context/FormContext";

import Theme from "../Theme/index";
import SelectBox from "../../SelectBox";
import Button from "../../Button";

const StepForm2 = () => {
  const history = useHistory();
  const { name, step, setStep, subscribe, setSubscribe } = useForm();

  useEffect(() => {
    if (name === "") {
      history.push("/stepform1");
    } else {
      setStep(2);
    }
  }, []);

  function nextStep() {
    history.push("/stepform3");
  }

  return (
    <Theme>
      <S.Section>
        <h1>Muito Bem,  {name}.</h1>
        <p>Selecione a opção que deseja receber:</p>
        <small>Passo {step}/3</small>

        <S.Value>
          <SelectBox
            id="0"
            text="Apenas Notícias sobre Oppenheimer."
            onClick={() => setSubscribe(0)}
            selected={subscribe === 0}
          />

          <SelectBox
            id="1"
            text="Apenas Notícias sobre Projeto Manhattan."
            onClick={() => setSubscribe(1)}
            selected={subscribe === 1}
          />

          <SelectBox
            id="2"
            text="Todas as Notícias sobre a Bomba Atômica."
            onClick={() => setSubscribe(2)}
            selected={subscribe === 2}
          />

          <S.GroupButton>
            <Link className="btn-back" to="stepform1">
              Voltar
            </Link>
            <Button text="Finalizar" onClick={nextStep} />
          </S.GroupButton>
        </S.Value>
      </S.Section>
    </Theme>
  );
};

export default StepForm2;

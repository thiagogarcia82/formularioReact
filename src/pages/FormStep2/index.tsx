import { useHistory, Link } from 'react-router-dom';
import * as C from './styles';
import { FormActions, useForm } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme'
import { ChangeEvent, useEffect } from 'react';
import { SelectOpition } from '../../components/SelectOption';

export const FormStep2 = () => {
  const history = useHistory();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.name === ``) {
      history.push('/');
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 2
      });
    }
  }, []);

  const handleNextStep = () => {
    if (state.name !== '') {
      history.push('/step3');
    } else {
      alert("Preencha os dados.")
    }
  }

  const setLevel = (level: number) => {
    dispatch({
      type: FormActions.setLevel,
      payload: level
    });
  }

  return (
    <Theme>
      <C.Container>
        <p>Passo 2/3 - {state.name}</p>
        <h1>{state.name}, O que melhor define voçe?</h1>
        <p>Escolha a opção que melhor condiz com seu estado atual, profissionalmente.</p>

        <hr />

        <SelectOpition
          title="Sou iniciante"
          description="começei a programar há menos de dois anos"
          icon="💪"
          selected={state.level === 0}
          onClick={() => setLevel(0)}



        />

        <SelectOpition
          title="Sou programador"
          description="ja proframo há dois anos ou mais"
          icon="💪"
          selected={state.level === 1}
          onClick={() => setLevel(1)}


        />
        <Link to='/' className="backButton">Voltar</Link>
        <button onClick={handleNextStep}>próximo</button>

      </C.Container>
    </Theme >
  );
}

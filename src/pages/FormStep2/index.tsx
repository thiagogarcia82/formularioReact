import { useHistory } from 'react-router-dom';
import * as C from './styles';
import { FormActions, useForm } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme'
import { ChangeEvent, useEffect } from 'react';

export const FormStep2 = () => {
  const history = useHistory();
  const { state, dispatch } = useForm();

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 2
    });
  }, []);

  const handleNextStep = () => {
    if (state.name !== '') {
      history.push('/step3');
    } else {
      alert("Preencha os dados.")
    }
  }

  return (
    <Theme>
      <C.Container>
        <p>Passo 2/3 - {state.name}</p>
        <h1>Vamos começar com seu nome</h1>
        <p>Preencha o campo abaixo com seu nome completo.</p>

        <hr />



        <button onClick={handleNextStep}>próximo</button>

      </C.Container>
    </Theme>
  );
}

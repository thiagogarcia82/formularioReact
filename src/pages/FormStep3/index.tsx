import { useHistory, Link } from 'react-router-dom';
import * as C from './styles';
import { FormActions, useForm } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme'
import { ChangeEvent, useEffect } from 'react';

export const FormStep3 = () => {
  const history = useHistory();
  const { state, dispatch } = useForm();

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 3
    });
  }, []);

  const handleNextStep = () => {
    if (state.name !== '') {
      history.push('/step2');
    } else {
      alert("Preencha os dados.")
    }
  }

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setName,
      payload: e.target.value
    });
  }

  return (
    <Theme>
      <C.Container>
        <p>Passo 3/3 - {state.name}</p>
        <h1>legal {state.name}, onde vamos te encontrar?</h1>
        <p>Preencha com seus dados para conseguirmos entrar em contato.</p>

        <hr />

        <label>

          Seu nome e-mail
          <input
            type="text"
            value={state.name}
            onChange={handleNameChange}

          />
        </label>

        <label>
          Qual e o seu Github?
          <input
            type="email"
            value={state.email}
          //onChange={handleEmailChange}
          />

        </label>

        <button onClick={handleNextStep}>próximo</button>

      </C.Container>
    </Theme>
  );
}

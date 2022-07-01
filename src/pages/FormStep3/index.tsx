import { useHistory, Link } from 'react-router-dom';
import * as C from './styles';
import { FormActions, useForm } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme'
import { ChangeEvent, useEffect } from 'react';

export const FormStep3 = () => {
  const history = useHistory();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.name === '') {
      history.push('/');
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 3
      });
    }
  }, []);

  const handleNextStep = () => {
    if (state.email !== '' && state.github !== '') {
      console.log(state);
    } else {
      alert("Preencha seus dados")
    }
  }

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value
    });
  }

  const handGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setGithub,
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

          e-mail
          <input
            type="email"
            value={state.name}
            onChange={handleEmailChange}

          />
        </label>

        <label>
          Qual e o seu Github?
          <input
            type="url"
            value={state.github}
            onChange={handGithubChange}
          />

        </label>

        <Link to="/step2" className="backButton">Voltar</Link>

        <button onClick={handleNextStep}>Finalizar cadastro</button>

      </C.Container>
    </Theme>
  );
}

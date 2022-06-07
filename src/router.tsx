import{ BrowserRouter, Route } from 'react-router-dom';
import {FormStep1} from './pages/FormStep1';
// import {FormStep1} from './pages/formStep2';
// import {FormStep1} from './pages/formStep3';

export const Router = () => {
  return(
    <BrowserRouter>
      <Route path="/" exact component={FormStep1} />        
    </BrowserRouter>
  )
}
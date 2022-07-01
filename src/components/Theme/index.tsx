import { ReactNode } from 'react';
import * as C from './styles';
import { Header } from '../Header';
import { SideBarItem } from '../SideBarItem';

type Props = {
  children: ReactNode;
}

export const Theme = ({ children }: Props) => {
  return (
    <C.Container>
      <C.Area>
        <Header />
        <C.Steps>
          <C.Sidebar>
            <SideBarItem
              title="Pessoal"
              descripyion="Se indentifique"
              icon="profile"
              path="/"

            />

            <SideBarItem
              title="Profissional"
              descripyion="Seu nivel"
              icon="book"
              path="/step2"

            />
            <SideBarItem
              title="Contatos"
              descripyion="como te achar"
              icon="Email"
              path="/step3"

            />

          </C.Sidebar>
          <C.Page>
            {children}
          </C.Page>
        </C.Steps>
      </C.Area>
    </C.Container>
  );

}
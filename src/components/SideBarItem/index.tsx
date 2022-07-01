import * as  C from './styles';

type Props = {
  title: string;
  descripyion: string;
  icon: string;
  path: string;
}

export const SideBarItem = ({ title, descripyion, icon, path }: Props) => {
  return (
    <C.Container>
      ...
    </C.Container>
  )
};

import P from 'prop-types';
import { BsMoon, BsSun } from 'react-icons/bs';
import * as S from './styles';

// eslint-disable-next-line no-unused-vars
export const ToggleButton = ({ theme, toggleTheme }) => (
  <S.Container>
    <S.Toggle // input
      id="toggleMode"
      type="checkbox"
      onChange={toggleTheme}
      checked={localStorage.getItem('theme') === 'dark' && 'checked'}
    />
    <S.ToggleLabel // label
      htmlFor="toggleMode" // id
    >
      <BsSun /> {/* svg Sun */}
      <BsMoon /> {/* svg Moon */}
    </S.ToggleLabel>
  </S.Container>
);

ToggleButton.propTypes = {
  theme: P.node.isRequired,
  toggleTheme: P.func.isRequired,
};

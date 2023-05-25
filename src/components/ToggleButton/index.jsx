/* eslint-disable no-unused-expressions */
import P from 'prop-types';
import { BsMoon, BsSun } from 'react-icons/bs';
import * as S from './styles';


export const ToggleButton = ({ ToogleTheme }) => (
  <>
    <S.Toggle // input
        id="toggleMode"
        type='checkbox'
        onClick={ToogleTheme}
        checked={localStorage.getItem("theme") === 'dark' && 'checked'}
    />
    <S.ToggleLabel // label
      for="toggleMode" // id
    >
      <BsSun /> {/* svg Sun */}
      <BsMoon /> {/* svg Moon */}
    </S.ToggleLabel>
  </>
  )

ToggleButton.propTypes = {
  ToogleTheme: P.func.isRequired,
}

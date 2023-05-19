/* eslint-disable no-unused-expressions */
import P from 'prop-types';
import { useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import * as S from './styles';

export const ToggleButton = ({ typeButton, onClickButton }) => {

const [toggle, setToggle] = useState(false)

  return(
    <S.Container>
      <S.ToggleButton
          type={typeButton}
          onClick={onClickButton}
      />
      {toggle === false ? setToggle(() => <FaSun />) : setToggle(() => <FaMoon />)}

    </S.Container>
  );
}

ToggleButton.propTypes = {
  typeButton: P.string.isRequired,
  onClickButton: P.func.isRequired,
};

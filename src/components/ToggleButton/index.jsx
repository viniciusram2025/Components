/* eslint-disable no-unused-expressions */
import { BsMoon, BsSun } from 'react-icons/bs';
import * as S from './styles';


export const ToggleButton = () => (
    <>
      <S.Toggle
          id="toggleMode"
          type='checkbox'
      />
      <S.ToggleLabel
        for="toggleMode"
      >
        <BsSun />
        <BsMoon />
      </S.ToggleLabel>
    </>
  )


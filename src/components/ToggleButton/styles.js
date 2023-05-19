import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 10;
  top: 0;
  right: 20px;
  border: 1px solid yellow;
  border-radius: 30px;
`;


export const ToggleButton = styled.button`
  ${({theme}) => css`
      //padding: ${theme.spacings.space03} ${theme.spacings.space03};
      background: transparent;
      border: none;
      outline: none;
      position: relative;

      span {
        height: 100%;
        display: flex;
      }
  `}
`;


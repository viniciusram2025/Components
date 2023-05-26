/* eslint-disable no-use-before-define */
import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 30px;
  z-index: 10;
`;

export const Toggle = styled.input`
  width: 0;
  height: 0;
  visibility: hidden;
`;

export const ToggleLabel = styled.label`
  width: 130px;
  height: 40px;
  display: flex;
  position: relative;
  background: #ebebeb;
  border-radius: 35px;
  cursor: pointer;

  box-shadow: inset 0px 2px 5px rgba(0,0,0,.4), inset 0px -5px 15px rgba(255,255,255,.4);
  transition: .5s;

  &::after {
    content: '';
    width: 35px;
    height: 35px;
    position: absolute;
    top: 2.5px;
    left: 4px;
    background: linear-gradient(180deg, #ffcc89, #d8860b);
    border-radius: 35px;
    box-shadow: 0px 2px 3px rgba(0,0,0,.2);
    transition: .5s;
  }
  &:active::after {
    width: 50px;
  }

  ${Toggle}:checked + & {
    background: #242424;
    transition: .5s;
  }
  ${Toggle}:checked + &::after {
    left: 126px;
    transform: translateX(-100%);
    background: linear-gradient(180deg, #777, #3a3a3a);
    transition: .5s;
  }

  svg {
    position: absolute;
    width: 30px;
    height: 30px;
    top: 4.5px;
    left: 4px;
    z-index: 10;
  }
  svg:first-of-type {
    left: 6.5px;
    fill: #ebebeb;
    transition: 0.3s;
  }
  ${Toggle}:checked + & svg:first-of-type {
    fill: #7e7e7e;
  }
  svg:last-of-type {
    left: 93px;
    fill: #7e7e7e;
    transition: 0.3s;
  }
  ${Toggle}:checked + & svg:last-of-type {
    fill: #ebebeb;
  }

`;

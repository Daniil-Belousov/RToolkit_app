import styled from 'styled-components';
import { bgImg } from './images/index'

export const Background = styled.div`
  background: center / cover no-repeat url(${bgImg});
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  vertical-align: middle;
  align-items: center;
  position: relative;
`

export const LogoText = styled.h1`
  font-size: 36px;
  background: -webkit-linear-gradient(60deg, red, black);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  position: absolute;
  right: 3%;
  bottom: 1%;
  margin: 0;
`
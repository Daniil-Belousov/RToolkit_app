import styled, {css} from "styled-components";
import { bgModalImg } from '../../images/index'

export const BackgroundModal = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.7);
  z-index: 0;
`

export const ModalWrap = styled.div`
  padding: 30px 20px;
  max-width: 500px;
  width: 100%;
  height: 700px;
  border: 1px solid black;
  border-radius: 15px;
  background: center / cover no-repeat url(${bgModalImg});
  filter: brightness(0.9);
  display: flex;
  flex-direction: column;

  position: absolute;
  right: 50%;
  top: 50%;
  transform: translate(50%, -50%);
  z-index: 1;
`

export const ModalHeader = styled.div`
  display: flex;
  justify-content: start;

  width: 100%;
  height: 15%;
`

export const ModalTitle = styled.h3`
  color: black;
  font-size: 24px;
`

export const ModalBody = styled.div`
  width: 100%;
  height: 75%;
`

export const ModalFooter = styled.div`
  width: 100%;
  height: 10%;

  display: flex;
  justify-content: end;
  align-items: end;
`

const btnStyles = css`
  font-size: 16px;
  color: white;
  border: 1px solid black;
  border-radius: 10px;
  padding: 0px 10px;
  cursor: pointer;
  margin: 10px ;
  height: 40px;

  &:hover {
    opacity: 0.8;
  }
`

export const CloseBtn = styled.button`
  ${btnStyles}
  background: -webkit-linear-gradient(60deg, red, black);
`

export const SaveBtn = styled.button`
  ${btnStyles}
  background: -webkit-linear-gradient(60deg, green, black);
`

export const TextField = styled.textarea`
  resize: none;
  width: 100%;
  overflow: hidden;
  outline: none;
  border: 1px solid black;
  border-radius: 10px;
  margin-top: 10px;
`

export const Label = styled.label`
  color: black;
  font-size: 18px;
`
import styled from "styled-components";

interface PropsI {
  isCompleted: boolean;
}

export const ItemWrap = styled.div<PropsI>`
  width: 150px;
  height: 100px;
  padding: 10px;
  margin: 10px;
  border: 1px solid black;
  border-radius: 10px;

  ${({isCompleted}) => isCompleted 
    ? `background: -webkit-linear-gradient(60deg, green, black);` 
    : `background: -webkit-linear-gradient(60deg, red, black);`
}
  
  color: white;
  cursor: pointer;
  transition: 1s;

  &:hover {
    scale: 1.1;
  }
`

export const ItemTitle = styled.h3`
  color: white;
  font-size: 16px;
`
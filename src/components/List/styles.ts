import styled from "styled-components";

export const WrapList = styled.div`
  width: calc(100vw - 100px);
  height: calc(100vh - 100px);
  padding: 50px;

  display: flex;
  flex-direction: column;
`

export const HeaderList = styled.div`
  width: 100%;
  height: 20%;

  div {
    flex: 1;
  }
`

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  vertical-align: center;
`

export const BodyList = styled.div`
  width: 100%;
  height: 80%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const ColumnList = styled.div`
  flex: 1;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding-top: 20px;
`

export const TitleList = styled.h2`
  font-size: 32px;
  background: -webkit-linear-gradient(60deg, red, black);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const AddBtn = styled.button`
  font-size: 18px;
  background: -webkit-linear-gradient(60deg, red, black);
  color: white;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`



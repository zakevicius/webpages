import styled from "styled-components";

export const Body = styled.div`
  display: flex;
`;

export const StyledDiv = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-basis: 100%;
`;

// LEFT DIV

export const LeftDiv = styled(StyledDiv)`
  flex-basis: 70%;
  height: 100vh;
  background-color: tomato;
  flex-wrap: wrap;
`;

export const StyledHeader = styled.header`
  flex-basis: 100%;
  height: 15em;
  background-color: white;
`;

// RIGHT DIV

export const RightDiv = styled(StyledDiv)`
  flex-basis: 30%;
  height: 100vh;
  background-color: lime;
`;

export const Title = styled.h1`
  flex-basis: 100%;
  font-size: 24px;
  color: magenta;
  border: 1px solid blue;
  height: fit-content;
`;

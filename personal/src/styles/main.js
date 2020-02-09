import styled from "styled-components";

export const color = {
  white: "#f4f4f4",
  orange: "#ff7315",
  grey: "#3a3535",
  dark: "#232020"
};

const { white, orange, grey, dark } = color;

export const Body = styled.div`
  display: flex;
  background-color: ${dark};
`;

export const StyledDiv = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-basis: 100%;
  flex-wrap: wrap;
  border-collapse: collapse;
`;

export const Title = styled.h1`
  flex-basis: 100%;
  font-size: 24px;
  color: magenta;
  height: fit-content;
`;

// LEFT DIV

export const LeftDiv = styled(StyledDiv)`
  flex-basis: 70%;
  height: 100vh;
`;

export const StyledHeader = styled.header`
  flex-basis: 100%;
  height: 20vh;
  min-height: 10em;
`;

export const LeftDivContent = styled(StyledDiv)`
  height: 80vh;
  background-color: ${dark};
`;

// RIGHT DIV

export const RightDiv = styled(StyledDiv)`
  flex-basis: 30%;
  height: 100vh;
`;

export const RightDivContent = styled(StyledDiv)`
  height: 60vh;
  border: 1px solid ${orange};
`;

export const StyledIconList = styled(StyledDiv)`
  height: 40vh;
  justify-content: space-around;
  align-content: space-around;
`;

export const StyledIcon = styled.div`
  margin: 0px 50px;
  width: 50px;
  height: 50px;
  border: 1px solid ${grey};
  background-color: ${grey};
`;

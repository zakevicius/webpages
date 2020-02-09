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
  border-bottom: 4px solid ${grey};
  background: linear-gradient(10deg, rgba(35,32,32,1) 16%, rgba(255,115,21,1) 100%);
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
  border-left: 4px solid ${orange};
  border-bottom: 4px solid ${orange};
  border-bottom-left-radius: 8px;
  color: ${orange}
`;

export const StyledIconList = styled(StyledDiv)`
  height: 40vh;
  justify-content: space-around;
  align-content: space-around;
  background: ${orange};
`;
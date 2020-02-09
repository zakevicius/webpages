import styled from "styled-components";
import { StyledDiv, color } from "./main";

const { white, orange, grey, dark } = color;

export const ProjectListDiv = styled(StyledDiv)`
  height: 80vh;
  min-height: 40em;
  justify-content: space-around;
  align-content: space-around;
`;

export const ProjectDiv = styled(StyledDiv)`
  flex: 1;
  margin: 10px;
  min-width: 450px;
  height: 300px;
  height: 100%;
  border: 1px dashed ${grey};
  background-color: ${grey};
  flex-wrap: nowrap;
  overflow: hidden;
  position: relative;
  border-radius: 5px;
`;

export const StyledImageDiv = styled(StyledDiv)`
  transform: skew(-15deg);
  background-color: ${orange};
  flex-basis: 25%;
  position: relative;
  transition: flex-basis 0.6s ease-in, transform 0.5s;
  border: 1px solid ${dark};
  z-index: 1;
  border-radius: 5px;
`;

export const StyledImage = styled(StyledDiv)`
  position: absolute;
  flex-basis: 100% !important;
  background-color: ${grey};
`;

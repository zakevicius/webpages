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
  flex-basis: 40%;
  height: 300px;
  border: 1px dashed ${grey};
  background-color: ${grey};
  flex-wrap: nowrap;
  overflow: hidden;
  position: relative;
`;

export const StyledImageDiv = styled(StyledDiv)`
  transform: skew(-30deg);
  background-color: ${orange};
  flex-basis: 25%;
  position: relative;
  transition: all 0.5s ease-out;
  border: 1px solid black;
  z-index: 1;
`;

export const StyledImage = styled(StyledDiv)`
  position: absolute;
  flex-basis: 100% !important;
  background-color: ${grey};
`;

import React from "react";
import styled from "styled-components";
import { color } from '../../../styles/main'

const { white, orange, grey, dark } = color;

export default function Icon(props) {

  const StyledIcon = styled.div`
  margin: 10px 10px;
  width: 50px;
  height: 50px;
  background: url(${props.src});
  background-size: contain;
  border-radius: 50%;
`;

  return (
    <StyledIcon>
    </StyledIcon>
  )
}

import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`

from { 
    opacity: 0;
}

to {
    opacity: 1;
}`;

export const CustomImg = styled.img`
  width: 330px;
  height: 200px;
  margin: 10px;
  animation: ${rotate360} 0.8s linear;
  &:hover {
    opacity: 0.85;
  }

  ${(props) =>
    props.isSelected && "border: 5px solid gray; border-style: inset;"}
`;

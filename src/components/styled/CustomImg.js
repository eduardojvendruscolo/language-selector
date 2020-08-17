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

const loading = keyframes`
   0% {opacity: 0.3}
   50% {opacity: 1}
   100% {opacity: 0.3}
`;

export const CustomImgLoading = styled.div`
  width: 330px;
  height: 200px;
  background-color: gray;
  animation: ${loading} 2s linear infinite;
`;

import styled from "styled-components";
import { borderPrimary } from "../../colors";

interface Props {
  primary: boolean;
}

export const InputBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 40px;
  margin-top: 20px;
  @media (max-width: 770px) {
    height: 80px;
    flex-direction: column;
    align-items: center;
    align-content: space-between;
  }
`;

export const RegularButton = styled.button<Props>`
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};
  width: 30%;
  height: 39px;
  margin-left: -10px;
  border-radius: 5px;
  border: none;
  font-size: 18px;
  @media (max-width: 770px) {
    width: 90%;
    margin: 0px;
  }
`;

export const RegularInput = styled.input`
  width: 60%;
  height: 35px;
  border-radius: 5px;
  border: 1px solid #a6a6a6;
  font-size: 18px;
  @media (max-width: 770px) {
    width: 90%;
  }
`;

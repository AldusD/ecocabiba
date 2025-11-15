import styled from "styled-components";

import enums from "../../../../../enums";

export const QuizStyles = styled.div`
  position: relative;
  background-color: ${enums.COLORS.CARD_BG};
  font-family: sans-serif;
  border-radius: 16px;
  padding: 0;
  width: 60vw;
  max-width: 600px;
  margin: 40px auto;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  text-align: center;
  overflow: hidden;
  padding-bottom: 10px;

  .progress {
    margin-top: 20px;
    color: ${enums.COLORS.PRIMARY_TEXT};
    font-size: 14px;
  }

  img {
    width: 120%;
    height: 26vw;
  }

  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    background-color: ${enums.COLORS.LIGHT_ACTION};
    opacity: 80%;
    width: 100%;
    height: 10vh;
    position: absolute;
    top: 0;
    left: 0;

    div {
      position: absolute;
      margin: 1rem;
      top: 0.7vh;
      right: 1rem;
    }

    > span {
      margin: 50% 0;
    }
  }

  p {
    font-size: 1.2rem;
    font-weight: bold;
  }

  .feedback {
    margin-top: 16px;
    font-size: 18px;
  }
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 40px;
  margin-top: 20px
`;

export const Option = styled.button`
  border: none;
  border-radius: 12px;
  padding: 12px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
`;

export const Filter = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;

`;
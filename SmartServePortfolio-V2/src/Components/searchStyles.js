import styled, { css, keyframes } from "styled-components";
import SearchIcon from "./Images/searchBtn.png";
import ArrowRightIcon from "./Images/right-arrow.png";

export const Container = styled.div`
  position: relative;
  width: 44px;
  height: 44px;
  box-sizing: border-box;
  border-radius: 12px;
  border: none;
  padding: 5px;
  background: #222831;
  transition: all 0.5s;
  background: rgba(252, 252, 252, 1);


  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${({ hover }) =>
    hover &&
    css`
      width: 30%;
      @media (min-width: 768px) {
        width: 20%;
      }
    `}
`;

export const SearchInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 44px;
  line-height: 30px;
  outline: 0;
  border: 0;
  font-size: 1rem;
  border-radius: 12px;
  padding: 0 20px;
  margin: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;

  display: ${(props) => (props.showSearchInput ? "block" : "none")};
`;

/** icons */
const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const IconCommonCss = css`
  height: 1.25rem;
  width: 1.25rem;
  fill: #00adb5;
  z-index: 10;
  animation: ${fadeIn} 1s linear;
`;

// Define the styled img components
export const IconMagnifyingGlass = styled.img.attrs({
  src: SearchIcon,
  alt: "Search Icon"
})`
  ${IconCommonCss}
`;

export const IconRightArrow = styled.img.attrs({
  src: ArrowRightIcon,
  alt: "Arrow Right Icon"
})`
  ${IconCommonCss}
  align-self: flex-end;
  cursor: pointer;
  &:hover {
    fill: #393e46;
  }
`;

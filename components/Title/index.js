import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const WrapperTitle = styled.div(
  () => css`
    margin: 4rem 0 2rem 0;
  `
);

const TextTitle = styled.h1(
  ({ theme }) => css`
    font-size: 3.4rem;
    font-weight: 700;
    color: ${theme.colors.darkGray};
  `
);

export default function Title({ children }) {
  return (
    <>
      <WrapperTitle>
        <TextTitle>{children}</TextTitle>
      </WrapperTitle>
    </>
  );
}

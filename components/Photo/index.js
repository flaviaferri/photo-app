import React, { useState } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Title from "../Title";
import { FiHeart } from "react-icons/fi";

const Wrapper = styled.div(
  () => css`
    display: flex;
    flex-wrap: wrap;
    margin: 0 -1rem;
  `
);

const PicWrapper = styled.div(
  ({ theme }) => css`
    padding: 1rem;
    width: 25%;
    position: relative;
    justify-content: space-evenly;

    ${theme.breakpoints[1]} {
      width: 50%;
    }
  `
);

const Pic = styled.div(
  ({ url }) => css`
    border-radius: 1rem;
    width: 100%;
    height: 20rem;
    background-image: url(${url});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  `
);

const WrapperIcon = styled.div(
  ({ theme }) => css`
    position: absolute;
    background-color: ${theme.colors.white};
    border-radius: 50%;
    height: 3.6rem;
    width: 3.6rem;
    bottom: 2rem;
    right: 2rem;
    display: flex;
  `
);
const HeartIcon = styled(FiHeart)(
  () => css`
    height: 1.4rem;
    width: 1.6rem;
    margin: auto;
  `
);

export default function Photo({ pictures }) {
  if (pictures === []) {
    return null;
  }

  return (
    <>
      <Title>Daily Pictures</Title>
      <Wrapper>
        {pictures.map((picture) => (
          <PicWrapper key={picture.id}>
            <Pic url={picture.urls.small} />
            <WrapperIcon>
              <HeartIcon size={21} />
            </WrapperIcon>
          </PicWrapper>
        ))}
      </Wrapper>
    </>
  );
}

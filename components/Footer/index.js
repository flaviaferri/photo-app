import React from "react";
import { useRouter } from "next/router";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Link from "next/link";
import { AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";

const Wrapper = styled.footer(
  () => css`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: rgb(255 255 255 / 84%);
    height: 8rem;
    position: fixed;
    width: 100%;
    bottom: 0;
  `
);

const ButtonWrapper = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    align-items: center;
  `
);

const LinkElement = styled.a(
  ({ isActive, theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.2rem;
    line-height: 1.4rem;
    margin-top: 0.95rem;
    text-decoration: none;
    color: ${isActive ? theme.colors.blue : theme.colors.black};
  `
);

export default function Footer() {
  const { asPath } = useRouter();

  const isActive = (href) => asPath === href;

  return (
    <Wrapper>
      <Link href="/" passHref>
        <LinkElement isActive={isActive("/")}>
          <AiOutlineSearch size="26" strokeWidth="25" />
          Search
        </LinkElement>
      </Link>
      <Link href="/favorites" passHref>
        <LinkElement isActive={isActive("/favorites")}>
          <AiOutlineHeart size="26" strokeWidth="25" />
          Favorites
        </LinkElement>
      </Link>
    </Wrapper>
  );
}

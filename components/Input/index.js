import React, { useState } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { AiOutlineSearch } from "react-icons/ai";

const Wrapper = styled.div(
  () => css`
    display: flex;
    align-items: center;
    justify-content: center;
  `
);

const WrapperInput = styled.div(
  ({ theme }) => css`
    position: relative;
    height: 4rem;
    width: 100%;
  `
);

const InputSearchIp = styled.input(
  ({ theme }) => css`
    padding: 1rem 2rem;
    width: 100%;
    box-sizing: border-box;
    font-size: 1.8rem;
    border-radius: 5rem;
    background: ${theme.colors.lightGray};
    border: none;
    outline: none;
  `
);

const SearchIcon = styled(AiOutlineSearch)(
  () => css`
    position: absolute;
    right: 2rem;
    top: 1rem;
    cursor: pointer;
  `
);

export default function Input({ handleSubmit }) {
  const [value, setValue] = useState("");

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      return handleSubmit(value);
    }
  };

  return (
    <Wrapper>
      <WrapperInput>
        <InputSearchIp
          type="text"
          placeholder="Search Pictures"
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleEnter}
          value={value}
        />
        <SearchIcon onClick={() => handleSubmit(value)} size="25" />
      </WrapperInput>
    </Wrapper>
  );
}

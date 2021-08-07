import React, { useState } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Link from "next/link";
import InfiniteScroll from "react-infinite-scroll-component";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

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

const OutlineHeart = styled(AiOutlineHeart)(
  () => css`
    height: 1.4rem;
    width: 1.6rem;
    margin: auto;
  `
);

const FillHeart = styled(AiFillHeart)(
  ({ theme }) => css`
    height: 1.4rem;
    width: 1.6rem;
    margin: auto;
    color: ${theme.colors.blue};
  `
);

export default function Photos({ pictures, handleLoadMore }) {
  const [isFavorite, setIsFavorite] = useState("");

  const handleLoading = () => {
    handleLoadMore();
  };

  const checkIsFavorite = (id) => {
    const myFavorites = localStorage.getItem("PhotosApp");
    return myFavorites?.split("|")?.find((favorite) => favorite === id);
  };

  const handleFav = (id) => {
    const myFavorites = localStorage.getItem("PhotosApp");

    if (myFavorites) {
      // Check if photo is already there favorite
      if (myFavorites.split("|").find((favorite) => favorite === id)) {
        let newFavorites = myFavorites
          .split("|")
          .filter((favorite) => favorite !== id);

        newFavorites = newFavorites.join("|");
        localStorage.setItem("PhotosApp", newFavorites);
        setIsFavorite(newFavorites);
        return;
      }

      localStorage.setItem("PhotosApp", `${id}|${myFavorites}`);
      setIsFavorite(`${id}|${myFavorites}`);
      return;
    }

    localStorage.setItem("PhotosApp", `${id}`);
    setIsFavorite(`${id}`);
  };

  debugger;

  if (pictures.length === 0) {
    return null;
  }

  return (
    <>
      <InfiniteScroll
        dataLength={pictures.length}
        next={handleLoading}
        hasMore={true}
        style={{ overflow: "hidden" }}
      >
        <Wrapper>
          {pictures?.map((picture) => (
            <PicWrapper key={picture?.id}>
              <Link href={`/detail/${picture?.id}`}>
                <Pic url={picture?.urls?.small} />
              </Link>

              <WrapperIcon
                onClick={() => {
                  handleFav(picture?.id);
                }}
              >
                {checkIsFavorite(picture?.id) ? (
                  <FillHeart size={20} />
                ) : (
                  <OutlineHeart size={20} />
                )}
              </WrapperIcon>
            </PicWrapper>
          ))}
        </Wrapper>
      </InfiniteScroll>
    </>
  );
}

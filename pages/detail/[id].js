import React, { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { createApi, toJson } from "unsplash-js";

import Back from "../../components/Icons/Back";

const unsplash = createApi({
  accessKey: "cDNJxPq6O_eVRv4YQII_WcC5cJww3chv5pHoGTvsTYY",
});

const BackIcon = styled(Back)(
  ({}) => css`
    position: absolute;
    top: 2rem;
    left: 2rem;
    filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));
  `
);

const Wrapper = styled.div(
  ({}) => css`
    position: relative;
  `
);

const Row = styled.div(
  ({}) => css`
    display: flex;
    padding: 2rem;
  `
);

const Column = styled.div(
  ({}) => css`
    width: 100%;
  `
);

const Text = styled.p(
  ({ theme }) => css`
    font-size: 1.6rem;
    line-height: 1.9rem;
    color: ${theme.colors.gray};
  `
);

const Data = styled.p(
  ({ theme }) => css`
    font-size: 2.4rem;
    line-height: 2.9rem;
    color: ${theme.colors.black};
    font-weight: 600;
  `
);

const Pic = styled.div(
  ({ url, theme }) => css`
    width: 100%;
    height: 60vh;
    top: 0;
    background-image: url(${url});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    ${theme.breakpoints[1]} {
      height: 40rem;
    }
  `
);

export default function Detail() {
  const [picture, setPicture] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const getPhoto = async () => {
      unsplash.photos
        .get({ photoId: router.query.id })
        .then(toJson)
        .then((json) => {
          setPicture(json.response);
        });
    };

    getPhoto();
  }, []);

  return (
    <>
      <Wrapper>
        <BackIcon onClick={() => Router.back()} />
        <Pic url={picture?.urls?.regular} />
      </Wrapper>
      <Row>
        <Column>
          <Text>Downloads</Text>
          <Data>{picture?.downloads || "Unknown"}</Data>
        </Column>
        <Column>
          <Text>Country</Text>
          <Data>{picture?.location?.country || "Unknown"}</Data>
        </Column>
      </Row>
      <Row>
        <Column>
          <Text>User</Text>
          <Data>{picture?.user?.name || "Unknown"}</Data>
        </Column>
        <Column>
          <Text>Likes</Text>
          <Data>{picture?.likes || "Unknown"}</Data>
        </Column>
      </Row>
    </>
  );
}

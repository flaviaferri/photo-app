import { useState, useEffect } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Head from "next/head";
import Input from "../components/Input";
import Photos from "../components/Photos";
import { createApi, toJson } from "unsplash-js";

const Main = styled.div(
  () => css`
    padding: 1.6rem;
  `
);

export default function Home() {
  const [search, setSearch] = useState("");
  const [pictures, setPictures] = useState([]);
  const [page, setPage] = useState(1);

  const unsplash = createApi({
    accessKey: "ggPLSD6QWCQ6G4IttYDd4zVvcw6iVznaVTLiDxocKKM",
  });

  // Initial search
  useEffect(() => {
    const searchPhotos = async () => {
      unsplash.search
        .getPhotos({ query: search, page })
        .then(toJson)
        .then((json) => {
          setPictures(json.response.results);
        });
    };

    searchPhotos();
  }, [search]);

  // Load more
  useEffect(() => {
    const searchPhotos = async () => {
      unsplash.search
        .getPhotos({ query: search, page })
        .then(toJson)
        .then((json) => {
          setPictures((pictures) => [...pictures, ...json.response.results]);
        });
    };

    searchPhotos();
  }, [page]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <Head>
        <title>Photo App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Input handleSubmit={setSearch} />
        <Photos pictures={pictures} handleLoadMore={handleLoadMore} />
      </Main>

      <footer></footer>
    </div>
  );
}

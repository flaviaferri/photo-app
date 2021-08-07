import React, { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";
import { createApi } from "unsplash-js";
import Photos from "../../components/Photos";
import Input from "../../components/Input";
import Main from "../../components/Main";
import Title from "../../components/Title";

const unsplash = createApi({
  accessKey: "cDNJxPq6O_eVRv4YQII_WcC5cJww3chv5pHoGTvsTYY",
});

const getFavPhotosService = async (id) => {
  try {
    const { response } = await unsplash.photos.get({
      photoId: id,
    });
    return response;
  } catch (error) {}
};

export default function Detail() {
  const router = useRouter();
  const [pictures, setPictures] = useState([]);

  const setSearch = (value) => {
    router.push(`/?search=${value}`);
  };

  useEffect(() => {
    const getPhotos = async (ids) => {
      let photos = [];
      await Promise.all(
        ids.map(async (id) => {
          const photo = await getFavPhotosService(id);
          photos.push(photo);
        })
      );
      setPictures(photos);
    };

    const myFavorites = localStorage.getItem("PhotosApp");

    if (myFavorites) getPhotos(myFavorites.split("|"));
  }, []);

  return (
    <>
      <Main>
        <Input handleSubmit={setSearch} />
        <Title>Favorites</Title>
        <Photos pictures={pictures} />
      </Main>
    </>
  );
}

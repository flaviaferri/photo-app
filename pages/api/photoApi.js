import { createApi } from "unsplash-js";

const unsplash = createApi({
  accessKey: "ggPLSD6QWCQ6G4IttYDd4zVvcw6iVznaVTLiDxocKKM",
});

const searchPhotos = async (e) => {
  e.preventDefault();
  unsplash.search
    .photos(query)
    .then(toJson)
    .then((json) => {
      console.log(json);
    });
};

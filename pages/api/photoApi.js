import { createApi } from "unsplash-js";

const unsplash = createApi({
  accessKey: "cDNJxPq6O_eVRv4YQII_WcC5cJww3chv5pHoGTvsTYY",
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

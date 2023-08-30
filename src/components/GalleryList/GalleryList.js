import React from "react";

import { GalleryListContainer, GalleyImg } from "./styles";

const GalleryList = (props) => {
  const { images } = props;

  return (
    <GalleryListContainer>
      {images.map((image) => (
        <GalleyImg
          key={image.id}
          alt={`img-${image.download_url}`}
          src={image.download_url}
          loading="lazy"
        />
      ))}
    </GalleryListContainer>
  );
};

export default GalleryList;

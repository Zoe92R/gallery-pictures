import React from "react";

import { GalleryListContainer, GalleyImg } from "./styles";

const GalleryList = (props) => {
  const { images } = props;

  return (
    <GalleryListContainer>
      {images.map((image, index) => (
        <div key={image.id + index}>
          {image.download_url && (
            <GalleyImg
              alt={`img-${image.download_url}`}
              src={image.download_url}
            />
          )}
        </div>
      ))}
    </GalleryListContainer>
  );
};

export default GalleryList;

import React from "react";

import ImgSkeleton from "../../components/ImgSkeleton/ImgSkeleton";
import { GalleryListContainer } from "../GalleryList/styles";

const count = 6;

const GallerySkeleton = () => {
  return (
    <GalleryListContainer>
      {Array.from({ length: count }, (_, index) => (
        <ImgSkeleton key={index} />
      ))}
    </GalleryListContainer>
  );
};

export default GallerySkeleton;

import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

import GalleryList from "../../components/GalleryList/GalleryList";
import { GalleryTitle, GalleryPageContainer } from "./styles";
import GallerySkeleton from "../../components/GallerySkeleton/GallerySkeleton";

const GalleryPage = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pageNum, setPageNum] = useState(1);

  const fetchImages = useCallback(async (page = 1) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${page}&limit=10`
      );
      setImages((prevImages) => [...prevImages, ...response.data]);
      setPageNum((prevPage) => prevPage + 1);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  const handleNext = () => {
    if (!loading) {
      fetchImages(pageNum);
    }
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <GalleryPageContainer>
      <GalleryTitle>Gallery Page</GalleryTitle>
      {images.length > 0 ? (
        <InfiniteScroll
          dataLength={images.length}
          next={handleNext}
          hasMore={true}
          loader={<GallerySkeleton />}
        >
          <GalleryList images={images} />
        </InfiniteScroll>
      ) : (
        <GallerySkeleton />
      )}
    </GalleryPageContainer>
  );
};

export default GalleryPage;

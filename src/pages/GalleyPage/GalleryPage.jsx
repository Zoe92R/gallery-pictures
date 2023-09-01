import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

import GalleryList from "../../components/GalleryList/GalleryList";
import GallerySkeleton from "../../components/GallerySkeleton/GallerySkeleton";
import { LIMIT } from "../../conts/fetchImgsLimit";
import { GalleryTitle, GalleryPageContainer } from "./styles";

const GalleryPage = ({ isShouldReload, resetIsShouldReload }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchImages = useCallback(
    async (page = 1, limit = 20) => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://picsum.photos/v2/list?page=${page}&limit=${LIMIT || limit}`
        );
        if (response.data.length === 0) {
          setHasMore(false);
          return;
        }
        const newImages = response.data;

        setImages((prevImages) => {
          // Check if the first image in the response is already in prevImages
          const isFirstImageDuplicate = prevImages.some(
            (prevImage) => prevImage.id === newImages[0].id
          );
          if (!isFirstImageDuplicate) {
            return [...prevImages, ...newImages];
          } else {
            return prevImages;
          }
        });
        setPageNum((prevPage) => prevPage + 1);
        if (isShouldReload) {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }
        resetIsShouldReload();
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    },
    [isShouldReload, resetIsShouldReload]
  );

  useEffect(() => {
    if (isShouldReload) {
      setImages([]);
      setPageNum(1);
      fetchImages();
    }
  }, [isShouldReload, fetchImages]);

  useEffect(() => {
    // Fetch images when the component mounts
    fetchImages();
  }, [fetchImages]);

  const handleNext = () => {
    if (!loading && hasMore) {
      fetchImages(pageNum);
    }
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <GalleryPageContainer>
      <GalleryTitle>Welcome to our Gallery!</GalleryTitle>
      {images.length > 0 ? (
        <InfiniteScroll
          dataLength={images.length}
          next={handleNext}
          hasMore={hasMore}
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

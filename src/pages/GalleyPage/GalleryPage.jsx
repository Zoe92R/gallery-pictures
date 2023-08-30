import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

import GalleryList from "../../components/GalleryList/GalleryList";
import { GalleryTitle, GalleryPageContainer } from "./styles";

const GalleryPage = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const fetchImages = useCallback(async (pageNum) => {
    console.log("fetching");
    try {
      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${pageNum}&limit=10`
      );
      setImages((prevImages) => [...prevImages, ...response.data]);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    } finally {
    }
  }, []);

  useEffect(() => {
    if (!images.length || page > 1) {
      console.log("fetchImages");
      setLoading(true);
      fetchImages(page);
    }
  }, [fetchImages, images.length, page]);

  if (loading && page === 1) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <GalleryPageContainer>
      <GalleryTitle>Gallery Page</GalleryTitle>
      <GalleryList images={images} />
      {loading && <div>Loading more...</div>}
    </GalleryPageContainer>
  );
};

export default GalleryPage;

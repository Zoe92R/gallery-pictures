import styled from "styled-components";

import GallerySkeleton from "../../components/GallerySkeleton/GallerySkeleton";

export const GalleryPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  margin-top: 76px;
`;

export const GalleryTitle = styled.h1`
  color: #1111a2;
  margin-bottom: 16px;
  font-weight: 800;
  text-align: center;
`;

export const LoadMoreSkeleton = styled(GallerySkeleton)`
  padding-top: 16px;
`;

import styled from "styled-components";

const breakpoint768 = "768px";
const breakpoint480 = "480px";

export const GalleryListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
  width: 85vw;

  @media (max-width: ${breakpoint768}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${breakpoint480}) {
    grid-template-columns: 1fr;
  }
`;

export const GalleyImg = styled.img`
  border-radius: 10px;
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
`;

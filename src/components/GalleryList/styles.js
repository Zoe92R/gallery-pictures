import styled from "styled-components";

import { BREAK_POINT_LARGE, BREAK_POINT_MEDIUM } from "../../conts/breakpoints";

export const GalleryListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
  width: 85vw;

  @media (max-width: ${BREAK_POINT_LARGE}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${BREAK_POINT_MEDIUM}) {
    grid-template-columns: 1fr;
  }
`;

export const GalleyImg = styled.img`
  border-radius: 10px;
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  background-color: #e1e1e1;
`;

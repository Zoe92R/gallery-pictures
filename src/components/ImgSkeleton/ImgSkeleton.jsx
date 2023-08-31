import React from "react";
import Skeleton from "@mui/material/Skeleton";

const ImgSkeleton = () => {
  return (
    <Skeleton
      variant="rectangular"
      sx={{
        width: "100%",
        height: "100%",
        aspectRatio: 1,
        borderRadius: "10px",
      }}
    />
  );
};

export default ImgSkeleton;

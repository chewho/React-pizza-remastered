import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="130" cy="130" r="130" />
      <rect x="0" y="272" rx="6" ry="6" width="280" height="30" />
      <rect x="1" y="311" rx="6" ry="6" width="280" height="84" />
      <rect x="0" y="416" rx="6" ry="6" width="91" height="30" />
      <rect x="135" y="408" rx="25" ry="25" width="140" height="43" />
      <rect x="226" y="443" rx="0" ry="0" width="8" height="9" />
    </ContentLoader>
  );
};

export default Skeleton;

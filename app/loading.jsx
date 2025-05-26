"use client";
import ClipLoader from "react-spinners/CircleLoader";
const Loading = () => {
  const overide = {
    display: "block",
    margin: "100px auto",
  };
  return (
    <div>
      <ClipLoader
        color="#3b882f6"
        cssOverride={overide}
        size={150}
        aria-label="Loading Spinner"
      />
    </div>
  );
};

export default Loading;

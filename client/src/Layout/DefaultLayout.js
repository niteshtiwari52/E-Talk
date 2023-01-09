import React from "react";

const DefaultLayoutHoc =
  (Components) =>
  ({ ...props }) => {
    return (
      <>
        <div className="w-full h-full">
          <Components {...props} />
        </div>
      </>
    );
  };

export default DefaultLayoutHoc;

import React from "react";

const DefaultLayoutHoc =
  (Components) =>
  ({ ...props }) => {
    return (
      <>
        <div className="w-full">
          <Components {...props} />
        </div>
      </>
    );
  };

export default DefaultLayoutHoc;

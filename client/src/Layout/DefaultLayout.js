import React from "react";

const DefaultLayoutHoc =
  (Components) =>
  ({ ...props }) => {
    return (
      <>
        {/* <div className="container mx-auto px-4 lg:px-20"> */}
        <div className="">
          <Components {...props} />
        </div>
      </>
    );
  };

export default DefaultLayoutHoc;

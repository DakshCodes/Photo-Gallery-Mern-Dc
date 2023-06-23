import React from "react";

const Grid = ({ photos }) => {
  console.log(photos)
  return (
    <>
      <h1>Our Gallery</h1>
      <div className="grid">
        {photos.map(({ photo, _id }) => (
          <div key={_id} className="grid__item">
            <img
              src={`https://gallerybackend.onrender.com/uploads/${photo}`}
              alt="grid_image"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Grid;

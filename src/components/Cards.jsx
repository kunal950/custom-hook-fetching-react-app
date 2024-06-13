import React from "react";
import Card from "./Card";
const Cards = ({ photos }) => {
  return (
    <>
      <div className="flex flex-col">
        <div className="text-center mb-6">
          <h1 className="font-serif text-2xl text-white pt-10 pb-3">Photos</h1>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          {photos.map((post, index) => (
            <Card
              key={index}
              title={`Photo no  ${index + 1}.`}
              url={post.url}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Cards;

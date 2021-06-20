import React from 'react';

const ImageList = (props) => {
  // instead of passing a single image to the map function (e.g. (image) => {}...) we're destucutring the properties of each image we're about to use; this way, we don't have to keep typing image. in front of each property we use
  const images = props.images.map(({ urls, id, alt_description }) => {
    // we assign a key prop to the root element that we return in the list so that react can check and render only new elements on rerender
    return <img src={urls.regular} key={id} alt={alt_description} />;
  });
  return <div>{images}</div>;
};

export default ImageList;

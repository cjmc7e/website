/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useRef, useState } from 'react';
import useImage from 'use-image';

function URLImage(props) {
  const [image, setImage] = useState(null);
  useEffect(() => {
  loadImage();
  }, [props.src]);
  
  function loadImage() {
  const image = new window.Image();
  image.src = props.src;
  image.onload = () => {
  setImage(image);
  };
  }
  return (
  <stage width="{window.innerWidth}" height="{window.innerHeight}">
  <layer>
  <image image="{image}" x="{props.x}" y="{props.y}"></image>
  </layer>
  </stage>
  );
  }

  export default Poster;
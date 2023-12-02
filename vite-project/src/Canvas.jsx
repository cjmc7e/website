import React, { useRef, useState } from 'react';
import ImageGen from './ImageGen';


function Canvas(props) {
  const canvasRef = useRef(null);
  const stats = props.stats
  const cover = albumCover
  const tracks = trackListing
  const album = albumName
  const al = albumLength
  const rd = releaseDate 
  return (
    <canvas ref={canvasRef}/>
    ImageGen(canvasRef,)
  );
}

  export default Canvas;
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useRef, useState } from 'react';
import ImageGen from './ImageGen';


function Poster(props) {
  const stats = props.stats
  const cover = new Image()
  cover.src = stats["albumCover"]
  const artist = stats["artist"]
  const tracks = stats["trackListing"]
  console.log(tracks)
  const album = stats["albumName"]
  const al = stats["albumLength"]
  const rd = stats["releaseDate"]
  const code = new Image()
  code.src = stats["code"]
  
  return (
    ImageGen(cover,artist,album,tracks,rd,al,code)
  );
}

  export default Poster;
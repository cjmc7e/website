import React from "react";
import { Component } from 'react';
import { findDOMNode } from 'react-dom';

class CanvasDownloadButton extends React.Component {
  downloadCanvas = () => {
    const canvas = document.getElementById('Poster');
    const dataUrl = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = 'canvas.png';
    link.href = dataUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  render() {
    return (
      <button onClick={this.downloadCanvas}>
        Download Canvas
      </button>
    );
  }
}

export default CanvasDownloadButton;
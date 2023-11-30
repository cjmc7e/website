import React, { useRef, useState } from 'react';
import ImageGen from './ImageGen';

const CanvasComponent = () => {
    const canvasRef = useRef(null);
    const canvasID = useID(Null)
    const [ctx, setCtx] = useState(null);
  
    useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      setCtx(ctx);
    }, []);
  
    ImageGen(canvas,ctx,)
  
    return (
      <div>
        <canvas id={canvasId} ref={canvasRef} onClick={draw} />
      </div>
    );
  };
import "./home.css"

function imageGen(album = null) {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const img = document.getElementById("back");
  //const cover = document.getElementById("cover")

  const imageWidth = img.width;
  const imageHeight = img.height;
  const coverw = cover.width;
  const coverh = cover.height;
  // rescaling the canvas element
  canvas.width = imageWidth;
  canvas.height = imageHeight;
  ctx.drawImage(img, 0, 0, imageWidth, imageHeight);
  ctx.drawImage(cover, 195, 270, coverw*2.1, coverh*2.1);
  ctx.font = '120.333px Arial';
  ctx.fillText("Black Country, New Road", 650.56, 2452.24);
  ctx.fillText("Ants from up there", 1711.27, 2615.88);
  ctx.font = '50.333px Arial';
  const text = "1 INTRO 2 CHAOS SPACE MARINE 3 CONCORDE";
  const text1 = "4 BREAD SONG 5 GOOD WILL HUNTING 6 HALDERN 7 MARK'S THEME";
  const text2 = "8 THE PLACE WHERE HE INSERTED THE BLADE  9 SNOW GLOBES 10 BASKETBALL SHOES";
  ctx.fillText(text, 1000.93, 2856.91);
  ctx.fillText(text1, 1000.93, 2956.91);
  ctx.fillText(text2, 1000.93, 2874.91);
  ctx.font = '50.333px Arial';
  ctx.fillText("4 Febuary 2022",155.04,3301.39);
  ctx.fillText("58m 46s",994.25,3301.39);
}
function App() {
  return (
    <>
    <head></head>
    <body>
    <img id="back" src="Thomas - Copy - Copy.png" style= "display: none;" alt="background img" />
    <img id="cover" src="ants-from-up-there-main-2588156621.jpg" style= "display: none;" alt="cover img"/>
    <canvas id='canvas'class="myCanvas" style="outline:black 3px solid"><p>Add suitable fallback here.</p></canvas> 
<input type="button" onclick="imageGen()" value="Tester" />
</body>
    </>
  )
}


export default App

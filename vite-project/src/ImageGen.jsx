import 'colorthief'

const Metro = new FontFace('Metro', 'url(fonts/Metropolis-Medium.otf)', {weight: 400});
const semiboldMetro = new FontFace('Metro', 'url(fonts/Metropolis-SemiBold.otf)', { weight: 500 });
const boldMetro = new FontFace('Metro', 'url(fonts/Metropolis-Bold.otf)', { weight: 700 });
document.fonts.add(Metro);
document.fonts.add(boldMetro);
document.fonts.add(semiboldMetro);
var pos = 1
function upper(lst){
    for (let i = 0; i < lst.length; i++) {
        lst[i]= lst[i].toUpperCase()
      }
      return lst
}
function download() {
  var download = document.getElementById("download");
  var image = document.getElementById("canvas").toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
  download.setAttribute("href", image);
}

function widther(l,ctx){
  if (l.length == 0){
    return
  }
    ctx.font = '400 .65in Metro'
    let s = (pos) + ' ' + l[0]
    let w = 0
    let width = ctx.measureText(s).width; 
    while(width <= 2064){
            w++
            s += ('  '+ (pos+w) + ' ' + l[w])
            console.log('s:' + s)
      width = ctx.measureText(s).width
      console.log('width:' + width)
    }
    if(width > 2077.39990234375){
      let print = l.slice(0,w)
      console.log('print: '+ print)
      l.splice(0, w);
      console.log('l: '+ l)
      return print
    } else {
          let print = l.slice(0,w+1)
          console.log('print: '+ print )
          l.splice(0, w+1);
          console.log('l: '+ l )
          return print
        } 
}

function palletegen(img){
let colors = getPalette(img, 9)
    .then(palette => { console.log(palette) })
    .catch(err => { console.log(err) })
    const canvas = document.getElementById('pallete')
    canvas.width = 1185;
    canvas.height = 144;
    const ctx = canvas.getContext("2d");
    let x = 0
    let y = 0
    for (let i = 0; i < colors.length; i++){
      let colorstring = 'rgb('
      for (let j = 0; j < colors[i].length; j++){
        colorstring += j + ','
      }
      colorstring += ')'
      ctx.fillStyle = colorstring;
      ctx.fillrect(x,y,131,143)
      x+=131
      x+=143
    }
      return canvas}

function parseTracks(tracks) {
  return tracks.map((track) => {
    var end = track.search(/\(/);
    if (end != -1) {
      let ret = track.slice(0, end - 1);
      return ret;
    } else {
        return track;
    }
  })
}

function parseTime(al) {
  var milliseconds = Math.floor((al % 1000) / 100),
    seconds = Math.floor((al / 1000) % 60),
    minutes = Math.floor((al / (1000 * 60)) % 60),
    hours = Math.floor((al / (1000 * 60 * 60)) % 24);

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  let ret = (hours < 1) ? minutes + "m " + seconds + "s" : hours + "h " + minutes + "m " + seconds + "s";
  return ret;

}

function parseDate(rd) {
  const months = {"01": "January", "02": "February", "03": "March", "04":"April", "05":"May", "06":"June", "07":"July", "08":"August", "09":"September", "10":"October", "11":"November", "12":"December"};
  let date = rd.split("-");
  let year = date[0];
  let month = date[1];
  let day = date[2];
  let month_word = months[month];
  return day + " " + month_word + " " + year;
}

function imageGen(canvas,ctx,cover,artist,album,tracks,rd,al,code) {
    const img = new Image(2480, 3508);
    const ctx = canvas.current.getContext('2d')
    img.src = "./assets/background.png";
    let y_lim = 3145

    const imageWidth = img.width;
    const imageHeight = img.height;
    const coverw = cover.width;
    const coverh = cover.height;
    canvas.width = imageWidth;
    
    canvas.height = imageHeight;
    ctx.drawImage(img, 0, 0, imageWidth, imageHeight);
    ctx.drawImage(cover, 162, 112, 2100, 2100); //cover needs to be 2100x2100
    ctx.textAlign = 'left';
    ctx.font = '500 3.5in Metro';
    ctx.fillText(artist, 165, 2470, 2100);
    ctx.font = '500 2.2in Metro';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 15.6;
    // guideing line 1
    ctx.beginPath();
    ctx.moveTo(159, 2545);//2545
    ctx.lineTo(2265,2545);//2545
    let color = palletegen(cover)
    ctx.drawImage(color, 159, 2560, color.width, color.height) //pallete needs to be 1185x144
    ctx.fillText(album, 1400, 2711, 1000);
    // Tracklisting gen
    const l = upper(tracks)
    let x = 155
    let y = 2795
    while(l.length != 0){ 
        let w = widther(l,ctx)
        for (let i = 0; i < w.length; i++){
          ctx.font = '500 .65in Metro'
          ctx.fillText(pos, x, y)
          ctx.font = '400 .65in Metro'
          if (pos < 10){
          ctx.fillText(w[i], x+50, y);} else{
            ctx.fillText(w[i], x+75, y)
          }
          pos++
          x += ctx.measureText((pos-1) + ' ' + w[i]).width+30
        }
        // guideing line 2
        if(l.length == 0){
          ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(159, y+30);
        ctx.lineTo(2265,y+30);
         ctx.stroke();
          break;
        }
          if (y >= 3045){
            
            ctx.fillText('...',x,y)
            ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(159, y_lim);
        ctx.lineTo(2265,y_lim);
        ctx.stroke()
              break;
            }
            x=155
          y += 73
        
        }
        //bottom stuff
        ctx.font = '500 .6in Metro';
        ctx.fillText('Release Date',136,3275);
        ctx.fillText('Album Length',897,3275);
        ctx.font = '500 1in Metro';
        ctx.fillText(album,1963,3275);
        ctx.font = '400 .65in Metro';
        ctx.fillText(rd,136,3345);
        ctx.fillText(al,897,3345);
        ctx.drawImage(code, 1963, 3300, code.width, code.height) //code needs to be 340x84
}
export default imageGen()
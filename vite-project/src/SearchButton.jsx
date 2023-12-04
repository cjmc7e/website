import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';  
import axios from 'axios';
import ImageGen from './ImageGen';
// import getLink from <backend />;

async function getLink(e) {
  var client_id = "685fe7b45b254865ae76e5ef47b00cbf";
    var client_secret = "6bd5fb3f26784a069b771f68efa0e209";

    var authOptions = {
      url: "https://accounts.spotify.com/api/token",
      method: "post", // Specify the HTTP method
      headers: {
        Authorization: "Basic " + btoa(client_id + ":" + client_secret),
        "Content-Type": "application/x-www-form-urlencoded", // Specify the content type
      },
      data: "grant_type=client_credentials",
    };

    try {
      const response = await axios(authOptions); // Use axios to make the POST request

      if (response.status === 200) {
        var token = response.data.access_token;
        console.log(`auth success! this is token: ${token}`)
      }

      const inputValue = e; // Get the input value

      const searchResponse = await fetch(
        "https://api.spotify.com/v1/albums/" + inputValue,
        {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      // console.log(`searchResponse: ${searchResponse}`);
      const data = await searchResponse.json();
      const uri = data.uri;
      const codeLink = "https://scannables.scdn.co/uri/plain/png/FFFFFFF/black/640/"+ uri;
      // console.log(`data: ${data}`);
      console.log('CodeLink' + codeLink);
      return codeLink;
    } catch (error) {
      console.error("Error:", error);
    }
}


function SearchButton(props) {
  const [isLoading, setLoading] = useState(false);
  const id = props.data;

  useEffect(() => {
    function simulateNetworkRequest() {
      return new Promise((resolve) => setTimeout(resolve, 2000));
    }

    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = async () => {
    setLoading(true);
    // send stuff to drawer and code maker here
    console.log(`sending! here's id: ${id}`);
    // grab stats using id from max's backend main.js
    // first, auth
    var client_id = "685fe7b45b254865ae76e5ef47b00cbf";
    var client_secret = "6bd5fb3f26784a069b771f68efa0e209";

    var authOptions = {
      url: "https://accounts.spotify.com/api/token",
      method: "post", // Specify the HTTP method
      headers: {
        Authorization: "Basic " + btoa(client_id + ":" + client_secret),
        "Content-Type": "application/x-www-form-urlencoded", // Specify the content type
      },
      data: "grant_type=client_credentials",
    };

    const response = await axios(authOptions);
    var token = response.data.access_token;
    console.log(`TOKEN: ${token}`);

    // with token, grab and pack information
    const album = await axios(`https://api.spotify.com/v1/albums/${id}`, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + token
    }
    });
    let code2 = await getLink(id)
    const stats = {
    albumCover: album.data.images[0].url,
    trackListing: album.data.tracks.items.map((track) => track.name),
    albumName: album.data.name,
    artist:album.data.artists[0].name,
    albumLength: album.data.tracks.items.reduce((acc, track) => acc + track.duration_ms, 0),
    releaseDate: album.data.release_date,
    code: code2
    };
    console.log(`STATS: ${JSON.stringify(stats)}`);
    console.log(`Album Length: ` + stats["albumLength"]);
    const cover = stats["albumCover"]
    //cover.setAttribute("display", "none");
    //document.body.appendChild(cover);
    const artist = stats["artist"]
    const tracks = stats["trackListing"]
    console.log(tracks)
    const album1 = stats["albumName"]
    const al = stats["albumLength"]
    const rd = stats["releaseDate"]
    const code = stats["code"]
    //code.setAttribute("display", "none");
    //document.body.appendChild(code);
    console.log(cover)
      const URL = await ImageGen(cover,artist,album1,tracks,rd,al,code)
    
      const link = document.createElement('a');
      link.download = album1+" "+ artist +'.png';
      link.href = URL;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
   
  }

  return (
    <Button
      variant="primary"   
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null}
    >
      {/* define button words */}
      {isLoading ? 'Loading…' : 'Create Poster!'}

    </Button>
  );
}

export default SearchButton;
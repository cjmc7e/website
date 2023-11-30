import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';  
import axios from 'axios';

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
    const stats = {
    albumCover: album.data.images[0].url,
    trackListing: album.data.tracks.items.map((track) => track.name),
    albumName: album.data.name,
    albumLength: album.data.tracks.items.reduce((acc, track) => acc + track.duration_ms, 0),
    releaseDate: album.data.release_date
    };
    console.log(`STATS: ${JSON.stringify(stats)}`);
    
    // send stats over to parth's drawing
    // here!
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
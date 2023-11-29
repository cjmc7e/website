const getLink = async (e) => {
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
      const codeLink = "https://scannables.scdn.co/uri/plain/png/000000/white/640/"+ uri;
      // console.log(`data: ${data}`);
      let img = new Image();
      img.src = codeLink;
      return img;
    } catch (error) {
      console.error("Error:", error);
    }
  };
  
export default getLink;
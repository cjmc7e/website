const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios');

const CLIENT_ID = "71d9ca5c97364a8392bad0a6297e95ea";
const CLIENT_SECRET = "44750ac84e8d4dcabe3da01f69686e89"

const getToken = async () => {

  const result = await axios('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + Buffer.from(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64')
    },
    body: 'grant_type=client_credentials'
  });

app.listen(port, () => {    
  console.log(`Example app listening at http://localhost:${port}`);
})};

const onChange = (e) => {
  var value = e.target.value;
  setPrefix(value);
  var words = value.split(" ");
  var trie_prefix = words[words.length - 1].toLowerCase();
  var found_words = myTrie.find(trie_prefix).sort((a, b) => {
    return a.length - b.length;
  });
  var first_word = found_words[0];
  if (
    found_words.length !== 0 &&
    value !== "" &&
    value[value.length - 1] !== " "
  ) {
    if (first_word != null) {
      var remainder = first_word.slice(trie_prefix.length);
      setSuggestion(value + remainder);
    }
  } else {
    setSuggestion(value);
  }
};

const getAlbumUrl = async (token, albumId) => {
  const result = await axios(`https://api.spotify.com/v1/albums/${albumId}`, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + token
    }
  });
  return result.data.images[0].url;
}
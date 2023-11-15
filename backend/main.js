const express = require('express');
const app = express();
const port = 3000;
const routes = require('./routes');

app.listen(port, () => {    
  console.log(`Example app listening at http://localhost:${port}`);
});

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
function splitString (string) {
  return string.match(/[^ ]+/g);
}


//Post Refactor Code
/*
module.exports = function dictionary(words) {
      const wordList = splitString(words) || [];
      console.log(wordList);
      const result = {};

      if(wordList.length > 0) {
        result[wordList[0]] = 1
      }
      if(wordList.length > 1) {
        result[wordList[1]] = 2;
      }

      return result
};
*/

//Refactored Code
module.exports = function dictionary(words) {
  const wordList = splitString(words) || [];
  console.log(wordList);
  const result = {};

  wordList.forEach(word => {
    result[word] = result[word] + 1 || 1;
  });

  return result
};

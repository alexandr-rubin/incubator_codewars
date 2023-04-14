function duplicateEncode(word){
    return word.toLowerCase().split("").map((x, index, arr) =>
      arr.indexOf(x) === arr.lastIndexOf(x) ? "(" : ")").join("");
}
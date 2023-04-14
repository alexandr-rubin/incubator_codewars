function solution(str){
    const arr = [];
  
    for (let i = 0; i < str.length; i += 2) {
      arr.push(str.substring(i, i + 2));
    }
    if(str.length % 2 != 0)
      arr[arr.length-1] += '_'
    return arr;
  }
function moveZeros(arr) {
    let a = arr.length
    for(let i = 0; i < a; i++){
      if(arr[i] === 0){
        arr.splice(i, 1)
        arr.push(0)
        a--
        i--
      }
    }
    return arr
  }
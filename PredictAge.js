function predictAge(...arr){
    let result = 0
    for(let i = 0; i < arr.length; i++){
      result += arr[i] * arr[i]
    }
    
    return Math.floor(Math.sqrt(result) / 2)
  }
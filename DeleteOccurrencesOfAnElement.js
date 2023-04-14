function deleteNth(arr,n){
    for(let i = 0; i < arr.length; i++){
      while(arr.filter(x => x === arr[i]).length > n)
        arr.splice(arr.lastIndexOf(arr[i]), 1)
    }
    return arr
  }
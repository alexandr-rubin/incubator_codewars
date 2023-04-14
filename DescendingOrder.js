function descendingOrder(n){
    return +n.toString().split('').sort((x, y) => y - x).join('')
  }
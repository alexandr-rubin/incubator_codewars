function narcissistic(value) {
    const arr = value.toString().split('').map(Number)
    return arr.reduce((x, y) => x + Math.pow(y, arr.length), 0) === value
  }
  
function ipsBetween(start, end){
    let arr1 = start.split('.')
    let arr2 = end.split('.')
    let res = ((arr2[0] - arr1[0]) * (256 * 256 * 256)) + ((arr2[1] - arr1[1]) * (256 * 256)) + ((arr2[2] - arr1[2]) * 256) + (arr2[3] - arr1[3])
    return res
}
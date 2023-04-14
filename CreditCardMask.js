// return masked string
function maskify(cc) {
  return cc.split("").map((x, index) => index < cc.length-4 ? "#" : x).join("")
}
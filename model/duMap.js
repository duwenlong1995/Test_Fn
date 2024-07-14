Array.prototype.duMap = function (callback) {
  let newArr = []
  for (let i = 0; i < this.length; i++) {
    const res = callback(this[i], i, this);
    newArr.push(res)
  }
  return newArr
}
export const duMap = Array.prototype.duMap;
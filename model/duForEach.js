Array.prototype.duForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
}
export const duForEach = Array.prototype.duForEach;
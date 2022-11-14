const _ = {};

(() => {
  for (let i = 1; i <= 17; i++) {
    _[`COL_${i < 10 ? '0' : ''}${i}`] = 48 * i;
  }

  _.Rectangle = (x, y, width, height) => new Rectangle(x - 4, y - 4, width, height);
})();

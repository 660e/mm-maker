(() => {
  console.log('initialize');

  Utils.Rectangle = (x, y, width, height) => new Rectangle(x - 4, y - 4, width, height);
})();

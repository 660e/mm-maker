const _ = {};

(() => {
  for (let i = 1; i <= 17; i++) {
    _[`COL_${i < 10 ? '0' : ''}${i}`] = 48 * i;
  }

  _.TextManager = {
    command: {
      'equip': '装备',
      'item': '道具',
      'get-on-off': '乘降',
      'navigate': '传真',
      'asset': '战车',
      'system': '系统'
    }
  };

  _.Rectangle = (x, y, width, height) => new Rectangle(x - 4, y - 4, width, height);
})();

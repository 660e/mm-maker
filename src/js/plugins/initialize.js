const _ = {
  initialize: function () {
    for (let i = 1; i <= $dataSystem.advanced.screenWidth / $dataSystem.tileSize; i++) {
      this[`COL_${i < 10 ? '0' : ''}${i}`] = $dataSystem.tileSize * i;
    }
  },

  TextManager: {
    command: {
      'asset': '战车',
      'equip': '装备',
      'get-on-off': '乘降',
      'item': '道具',
      'navigate': '传真',
      'system': '系统'
    }
  },

  Rectangle: (x, y, width, height) => new Rectangle(x - 4, y - 4, width, height)
};

const _ = {
  initialize: function () {
    this.LayoutManager.height.line = this.LayoutManager.height.text + this.LayoutManager.padding.y * 2;
    for (let i = 1; i <= $dataSystem.advanced.screenWidth / $dataSystem.tileSize; i++) {
      this.LayoutManager[`col_${i}`] = $dataSystem.tileSize * i;
    }
  },

  LayoutManager: {
    padding: {
      x: 12,
      y: 6
    },
    height: {
      text: 24
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

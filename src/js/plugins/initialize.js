const $c = {};

const $i = {};

const $q = {
  padding: {
    x: 12,
    y: 6
  },
  height: {
    line: 36,
    text: 24
  }
};

const $s = {};

const $t = {
  command: {
    asset: '战车',
    drive: '乘降',
    equip: '装备',
    item: '道具',
    navigate: '传真',
    system: '系统'
  }
};

const $u = {
  Initialize: () => {
    for (let i = 1; i <= $dataSystem.advanced.screenWidth / $dataSystem.tileSize; i++) {
      $q[`col_${i}`] = $dataSystem.tileSize * i;
    }
  },
  Rectangle: (x, y, width, height) => new Rectangle(x - 4, y - 4, width, height)
};

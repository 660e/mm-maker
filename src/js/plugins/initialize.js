const $c = {};

const $i = {};

const $q = {
  height: {
    line: 36,
    text: 24
  },
  padding: {
    x: 12,
    y: 6
  },
  size: {
    tile: 48
  }
};

const $s = {};

const $t = {
  command: {
    item: '道具',
    equip: '装备',
    asset: '战车',
    drive: '乘降',
    navigate: '传真',
    system: '系统',

    confirm: '确定',
    cancel: '取消',

    use: '使用',
    trade: '交给',
    toss: '丢弃'
  },
  interface: {
    gold: 'G'
  }
};

const $u = {
  Rectangle: (x, y, width, height) => new Rectangle(x - 4, y - 4, width, height)
};

for (let i = 1; i <= 17; i++) {
  $q[`col_${i}`] = $q.size.tile * i;
}

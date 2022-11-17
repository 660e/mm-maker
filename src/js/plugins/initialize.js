const $c = {
  normal: '#e0e0e0',
  damage: '#ef0000',
  health: '#7bff73',
  soukou: '#fff76b',
  outline: '#1d1d1d'
};

const $q = {
  fontSize1: 24,
  fontSize2: 18,
  tileSize: 48,
  itemHeight: 36,
  gaugeHeight: 3,
  padding: {
    x: 12,
    y: 6
  }
};

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
    gold: 'G',
    lv: 'LV',
    exp: 'EXP',
    hp: 'HP',
    sp: 'SP'
  }
};

const $u = {
  Rectangle: (x, y, width, height) => new Rectangle(x - 4, y - 4, width, height)
};

for (let i = 1; i <= 17; i++) {
  $q[`col_${i}`] = $q.tileSize * i;
}

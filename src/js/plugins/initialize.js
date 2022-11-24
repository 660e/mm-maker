const $c = {
  normalColor: '#e0e0e0',
  gaugeBackColor: '#ef0000',
  hpGaugeColor: '#7bff73',
  spGaugeColor: '#fff76b',
  outlineColor: '#1d1d1d',
  systemColor: '#2196f3'
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
  },
  gap: {
    x: 6
  }
};

const $t = {
  empty: '---',
  command: {
    item: '道具',
    equip: '装备',
    asset: '战车',
    drive: '乘降',
    navigate: '传真',
    option: '设置',

    ok: '确定',
    cancel: '取消',

    use: '使用',
    trade: '交给',
    discard: '丢弃'
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
  Initialize: () => {
    console.log('Initialize');

    if ($gameTemp.isPlaytest()) {
      SceneManager.goto(Scene_Title);
      Window_TitleCommand.initCommandPosition();
    } else {
      // SceneManager.goto(Scene_Map);
      SceneManager.goto(Scene_PartyChoice);
    }

    $gameActors.actor(1).setDrive(11);
    $gameActors.actor(2).setDrive(12);
    $gameActors.actor(3).setDrive(13);
  },
  Rectangle: (x, y, width, height) => new Rectangle(x - 4, y - 4, width, height)
};

for (let i = 1; i <= 17; i++) {
  $q[`col_${i}`] = $q.tileSize * i;
}

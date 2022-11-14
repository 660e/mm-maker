// ----------------------------------------------------------------------
// Scene_Menu
// ----------------------------------------------------------------------

Scene_Menu.prototype.create = function () {
  Scene_MenuBase.prototype.create.call(this);
  // this.createCommandWindow();
  this.createGoldWindow();
};

Scene_Menu.prototype.start = function () {
  Scene_MenuBase.prototype.start.call(this);
};

Scene_Menu.prototype.goldWindowRect = function () {
  const ww = _.COL_05;
  const wh = this.calcWindowHeight(1);
  const wx = Graphics.width - ww;
  const wy = 0;
  return _.Rectangle(wx, wy, ww, wh);
};

// ----------------------------------------------------------------------
// Scene_Boot
// ----------------------------------------------------------------------

Scene_Boot.prototype.startNormalGame = function () {
  this.disableTouchUI();
  this.checkPlayerLocation();
  DataManager.setupNewGame();

  if ($gameTemp.isPlaytest()) {
    SceneManager.goto(Scene_Title);
    Window_TitleCommand.initCommandPosition();
  } else {
    SceneManager.goto(Scene_Map);
  }
};

Scene_Boot.prototype.disableTouchUI = function () {
  ConfigManager.touchUI = false;

  console.warn('TODO -> touch mask');
};

// ----------------------------------------------------------------------
// Scene_MenuBase
// ----------------------------------------------------------------------

Scene_MenuBase.prototype.createBackground = function () {
  this._backgroundSprite = new Sprite();
  this._backgroundSprite.bitmap = SceneManager.backgroundBitmap();
  this.addChild(this._backgroundSprite);
};

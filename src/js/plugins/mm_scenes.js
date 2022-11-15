// ----------------------------------------------------------------------
// Scene_Menu
// ----------------------------------------------------------------------

Scene_Menu.prototype.create = function () {
  Scene_MenuBase.prototype.create.call(this);
  this.createCommandWindow();
  this.createGoldWindow();
  // this.createStatusWindow();
};

Scene_Menu.prototype.start = function () {
  Scene_MenuBase.prototype.start.call(this);
  // this._statusWindow.refresh();
};

Scene_Menu.prototype.createCommandWindow = function () {
  const rect = this.commandWindowRect();
  const commandWindow = new Window_MenuCommand(rect);

  commandWindow.setHandler('item', this.commandItem.bind(this));

  commandWindow.setHandler('cancel', this.popScene.bind(this));

  this.addWindow(commandWindow);
  this._commandWindow = commandWindow;
};

Scene_Menu.prototype.commandWindowRect = function () {
  const ww = _.COL_04;
  const wh = this.calcWindowHeight(3);
  const wx = 0;
  const wy = Graphics.height - wh;
  return _.Rectangle(wx, wy, ww, wh);
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

Scene_Boot.prototype.start = function () {
  Scene_Base.prototype.start.call(this);

  _.initialize();

  SoundManager.preloadImportantSounds();
  if (DataManager.isBattleTest()) {
    DataManager.setupBattleTest();
    SceneManager.goto(Scene_Battle);
  } else if (DataManager.isEventTest()) {
    DataManager.setupEventTest();
    SceneManager.goto(Scene_Map);
  } else {
    this.startNormalGame();
  }
  this.resizeScreen();
  this.updateDocumentTitle();
};

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

// ----------------------------------------------------------------------
// Scene_Item
// ----------------------------------------------------------------------

Scene_Item.prototype.create = function () {
  Scene_ItemBase.prototype.create.call(this);
  // this.createHelpWindow();
  this.createCategoryWindow();
  // this.createItemWindow();
  // this.createActorWindow();
};

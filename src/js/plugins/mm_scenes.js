// ----------------------------------------------------------------------
// Scene_Message
// ----------------------------------------------------------------------

Scene_Message.prototype.createAllWindows = function () {
  this.createMessageWindow();
  this.createNameBoxWindow();

  // TODO
  this.createScrollTextWindow();
  this.createGoldWindow();
  this.createChoiceListWindow();
  this.createNumberInputWindow();
  this.createEventItemWindow();
  this.associateWindows();
};

Scene_Message.prototype.messageWindowRect = function () {
  const ww = Graphics.width;
  const wh = this.calcWindowHeight(3);
  const wx = 0;
  const wy = Graphics.height - wh;
  return $u.Rectangle(wx, wy, ww, wh);
};

// ----------------------------------------------------------------------
// Scene_Menu
// ----------------------------------------------------------------------

Scene_Menu.prototype.create = function () {
  Scene_MenuBase.prototype.create.call(this);
  this.createSceneNameWindow();
  this.createGoldWindow();
  this.createCommandWindow();
  this.createStatusWindow();
};

Scene_Menu.prototype.createSceneNameWindow = function () {
  const rect = this.sceneNameWindowRect();
  this._sceneNameWindow = new Window_SceneName(rect);
  this.addWindow(this._sceneNameWindow);
};

Scene_Menu.prototype.sceneNameWindowRect = function () {
  const ww = $q.col_12;
  const wh = this.calcWindowHeight(1);
  const wx = 0;
  const wy = 0;
  return $u.Rectangle(wx, wy, ww, wh);
};

Scene_Menu.prototype.createCommandWindow = function () {
  const rect = this.commandWindowRect();
  const commandWindow = new Window_MenuCommand(rect);

  // TODO
  commandWindow.setHandler('item', this.commandItem.bind(this));
  commandWindow.setHandler('cancel', this.popScene.bind(this));

  this.addWindow(commandWindow);
  this._commandWindow = commandWindow;
};

Scene_Menu.prototype.goldWindowRect = function () {
  const ww = $q.col_5;
  const wh = this.calcWindowHeight(1);
  const wx = Graphics.width - ww;
  const wy = 0;
  return $u.Rectangle(wx, wy, ww, wh);
};

Scene_Menu.prototype.commandWindowRect = function () {
  const ww = $q.col_4;
  const wh = this.calcWindowHeight(3);
  const wx = 0;
  const wy = Graphics.height - wh;
  return $u.Rectangle(wx, wy, ww, wh);
};

Scene_Menu.prototype.statusWindowRect = function () {
  const ww = $q.col_13;
  const wh = this.calcWindowHeight(3);
  const wx = Graphics.width - ww;
  const wy = Graphics.height - wh;
  return $u.Rectangle(wx, wy, ww, wh);
};

// ----------------------------------------------------------------------
// Scene_Boot
// ----------------------------------------------------------------------

Scene_Boot.prototype.startNormalGame = function () {
  this.disableTouchUI();
  this.checkPlayerLocation();
  DataManager.setupNewGame();

  // TODO
  if ($gameTemp.isPlaytest()) {
    SceneManager.goto(Scene_Title);
    Window_TitleCommand.initCommandPosition();
  } else {
    SceneManager.goto(Scene_Map);
  }
};

Scene_Boot.prototype.disableTouchUI = function () {
  // TODO
  ConfigManager.touchUI = false;
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

  // TODO
  // this.createHelpWindow();
  this.createCategoryWindow();
  // this.createItemWindow();
  // this.createActorWindow();
};

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
  commandWindow.setHandler('item', this.commandTeam.bind(this));
  commandWindow.setHandler('equip', this.commandTeam.bind(this));
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

Scene_Menu.prototype.commandTeam = function () {
  SceneManager.push(Scene_TeamChoice);
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
// Scene_TeamChoice
// ----------------------------------------------------------------------

function Scene_TeamChoice() {
  this.initialize(...arguments);
}

Scene_TeamChoice.prototype = Object.create(Scene_MenuBase.prototype);

Scene_TeamChoice.prototype.constructor = Scene_TeamChoice;

Scene_TeamChoice.prototype.initialize = function () {
  Scene_MenuBase.prototype.initialize.call(this);
};

Scene_TeamChoice.prototype.create = function () {
  Scene_MenuBase.prototype.create.call(this);

  const ww = $q.col_8;
  const wh = this.calcWindowHeight(4);
  const wx = (Graphics.width - ww) / 2;
  const wy = (Graphics.height - wh) / 2;
  const rect = $u.Rectangle(wx, wy, ww, wh);

  this._teamChoiceWindow = new Window_TeamChoice(rect);

  this.addWindow(this._teamChoiceWindow);
};

Scene_TeamChoice.prototype.start = function () {
  Scene_MenuBase.prototype.start.call(this);
};

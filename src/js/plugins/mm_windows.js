// ----------------------------------------------------------------------
// Window_Base
// ----------------------------------------------------------------------

Window_Base.prototype.itemPadding = function () {
  return $q.padding.x;
};

Window_Base.prototype.loadWindowskin = function () {
  this.windowskin = ImageManager.loadSystem('sys_window');
};

Window_Base.prototype.drawCurrencyValue = function (value, unit, x, y, width) {
  const unitWidth = this.textWidth(unit);
  this.resetTextColor();
  this.drawText(value, x + $q.padding.x, y, width - $q.padding.x * 2 - unitWidth - $q.gap.x, 'right');
  this.changeTextColor($c.systemColor);
  this.drawText(unit, x + width - unitWidth - $q.padding.x, y, unitWidth);
};

Window_Base.prototype.setBackgroundType = function (type) {
  this.opacity = 255;
};

// ----------------------------------------------------------------------
// Window_Selectable
// ----------------------------------------------------------------------

Window_Selectable.prototype.itemHeight = function () {
  return Window_Scrollable.prototype.itemHeight.call(this);
};

Window_Selectable.prototype.itemRect = function (index) {
  const maxCols = this.maxCols();
  const itemWidth = this.itemWidth();
  const itemHeight = this.itemHeight();
  const x = (index % maxCols) * itemWidth;
  const y = Math.floor(index / maxCols) * itemHeight;
  return new Rectangle(x, y, itemWidth, itemHeight);
};

Window_Selectable.prototype.drawBackgroundRect = function (rect) {
  const c1 = 'rgba(255, 255, 255, 0.1)';
  const c2 = 'rgba(255, 255, 255, 0.1)';
  const x = rect.x;
  const y = rect.y;
  const w = rect.width;
  const h = rect.height;
  this.contentsBack.gradientFillRect(x, y, w, h, c1, c2, true);
  this.contentsBack.strokeRect(x, y, w, h, c1);
};

// ----------------------------------------------------------------------
// Window_SenceName
// ----------------------------------------------------------------------

function Window_SceneName() {
  this.initialize(...arguments);
}

Window_SceneName.prototype = Object.create(Window_Selectable.prototype);

Window_SceneName.prototype.constructor = Window_SceneName;

Window_SceneName.prototype.initialize = function (rect) {
  Window_Selectable.prototype.initialize.call(this, rect);
  this.refresh();
};

Window_SceneName.prototype.refresh = function () {
  const rect = this.itemRect(0);
  const x = rect.x + $q.padding.x;
  const y = rect.y;
  const width = rect.width - $q.padding.x * 2;
  this.contents.clear();
  this.resetTextColor();
  this.drawText($gameMap.displayName(), x, y, width);
};

// ----------------------------------------------------------------------
// Window_Gold
// ----------------------------------------------------------------------

Window_Gold.prototype.refresh = function () {
  const rect = this.itemRect(0);
  const x = rect.x;
  const y = rect.y;
  const width = rect.width;
  this.contents.clear();
  this.drawCurrencyValue(this.value(), this.currencyUnit(), x, y, width);
};

Window_Gold.prototype.currencyUnit = function () {
  return $t.interface.gold;
};

// ----------------------------------------------------------------------
// Window_StatusBase
// ----------------------------------------------------------------------

Window_StatusBase.prototype.placeBasicGauges = function (actor, x, y) {
  const hpx = this.innerWidth - $q.col_3 * 2 - $q.padding.x * 3;
  const spx = this.innerWidth - $q.col_3 - $q.padding.x;
  this.placeGauge(actor, 'hp', hpx, y);
  this.placeGauge(actor, 'sp', spx, y);
};

Window_StatusBase.prototype.drawActorSimpleStatus = function (actor, x, y) {
  this.drawActorName(actor, x + $q.padding.x, y, $q.col_3);
  this.placeBasicGauges(actor, x, y);
};

// ----------------------------------------------------------------------
// Window_MenuCommand
// ----------------------------------------------------------------------

Window_MenuCommand.prototype = Object.create(Window_HorzCommand.prototype);

Window_MenuCommand.prototype.initialize = function (rect) {
  Window_HorzCommand.prototype.initialize.call(this, rect);
};

Window_MenuCommand.prototype.makeCommandList = function () {
  this.addOriginalCommands();
};

Window_MenuCommand.prototype.addOriginalCommands = function () {
  ['item', 'drive', 'equip', 'navigate', 'asset', 'option'].forEach(c => {
    this.addCommand($t.command[c], c);
  });
};

Window_MenuCommand.prototype.maxCols = function () {
  return 2;
};

// ----------------------------------------------------------------------
// Window_MenuStatus
// ----------------------------------------------------------------------

Window_MenuStatus.prototype.numVisibleRows = function () {
  return 3;
};

Window_MenuStatus.prototype.drawItem = function (index) {
  this.drawItemStatus(index);
};

Window_MenuStatus.prototype.drawItemStatus = function (index) {
  const actor = this.actor(index);
  const rect = this.itemRect(index);
  this.drawActorSimpleStatus(actor, rect.x, rect.y);
};

// ----------------------------------------------------------------------
// Window_MapName
// ----------------------------------------------------------------------

Window_MapName.prototype.refresh = function () {};

// ----------------------------------------------------------------------
// Window_NameBox
// ----------------------------------------------------------------------

Window_NameBox.prototype.setName = function () {};

// ----------------------------------------------------------------------
// Window_ChoiceList
// ----------------------------------------------------------------------

Window_ChoiceList.prototype.windowX = function () {
  return Graphics.width - this.windowWidth() - 4;
};

Window_ChoiceList.prototype.windowWidth = function () {
  return Math.max($q.col_4, this.maxChoiceWidth() + this.padding);
};

// ----------------------------------------------------------------------
// Window_Message
// ----------------------------------------------------------------------

Window_Message.prototype.startMessage = function () {
  const text = $gameMessage.allText();
  const textState = this.createTextState(text, 0, 0, 0);
  textState.x = $q.padding.x;
  textState.startX = textState.x;
  this._textState = textState;
  this.newPage(this._textState);
  this.updatePlacement();
  this.updateBackground();
  this.open();
  this._nameBoxWindow.start();
};

Window_Message.prototype.updatePlacement = function () {
  const goldWindow = this._goldWindow;
  this._positionType = $gameMessage.positionType();
  if (goldWindow) {
    goldWindow.y = this.y > 0 ? 0 : Graphics.boxHeight - goldWindow.height;
  }
};

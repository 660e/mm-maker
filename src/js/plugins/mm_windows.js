// ----------------------------------------------------------------------
// Window_Base
// ----------------------------------------------------------------------

Window_Base.prototype.loadWindowskin = function () {
  this._margin = 12;
  this.windowskin = ImageManager.loadSystem('sys_window');
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

// ----------------------------------------------------------------------
// Window_StatusBase
// ----------------------------------------------------------------------

Window_StatusBase.prototype.placeBasicGauges = function (actor, x, y) {
  const hpx = this.innerWidth - $q.col_3 * 2 - $q.padding.x * 3;
  const spx = this.innerWidth - $q.col_3 - $q.padding.x;
  this.placeGauge(actor, 'hp', hpx, y);
  this.placeGauge(actor, 'mp', spx, y);
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
  ['item', 'drive', 'equip', 'navigate', 'asset', 'system'].forEach(c => {
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

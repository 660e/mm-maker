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
// Window_MenuCommand
// ----------------------------------------------------------------------

Window_MenuCommand.prototype = Object.create(Window_HorzCommand.prototype);

Window_MenuCommand.prototype.initialize = function (rect) {
  Window_HorzCommand.prototype.initialize.call(this, rect);
};

Window_MenuCommand.prototype.makeCommandList = function () {
  this.addOriginalCommands();
};

Window_MenuCommand.prototype.maxCols = function () {
  return 2;
};

Window_MenuCommand.prototype.addOriginalCommands = function () {
  ['item', 'get-on-off', 'equip', 'navigate', 'asset', 'system'].forEach(c => {
    this.addCommand(_.TextManager.command[c], c);
  });
};

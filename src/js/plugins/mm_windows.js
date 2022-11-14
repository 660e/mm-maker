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

// Window_Selectable.prototype.itemWidth = function () {
//   return Math.floor(this.innerWidth / this.maxCols());
// };

Window_Selectable.prototype.itemHeight = function () {
  return Window_Scrollable.prototype.itemHeight.call(this);
};

Window_Selectable.prototype.itemRect = function (index) {
  const maxCols = this.maxCols();
  const itemWidth = this.itemWidth();
  const itemHeight = this.itemHeight();
  const colSpacing = this.colSpacing();
  const rowSpacing = this.rowSpacing();
  const col = index % maxCols;
  const row = Math.floor(index / maxCols);
  const x = col * itemWidth + colSpacing / 2 - this.scrollBaseX();
  const y = row * itemHeight + rowSpacing / 2 - this.scrollBaseY();
  const width = itemWidth - colSpacing;
  const height = itemHeight - rowSpacing;

  return new Rectangle(x, y, width, height);
};

Window_Selectable.prototype.itemRectWithPadding = function (index) {
  const rect = this.itemRect(index);
  // const padding = this.itemPadding();
  // rect.x += padding;
  // rect.width -= padding * 2;
  return rect;
};

Window_Selectable.prototype.itemLineRect = function (index) {
  const rect = this.itemRectWithPadding(index);
  // const padding = (rect.height - this.lineHeight()) / 2;
  // rect.y += padding;
  // rect.height -= padding * 2;
  return rect;
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
  return 6;
};

Window_MenuCommand.prototype.addOriginalCommands = function () {
  this.addCommand(_.TextManager.command['equip'], 'equip');
  this.addCommand(_.TextManager.command['item'], 'item');
  this.addCommand(_.TextManager.command['get-on-off'], 'get-on-off');
  this.addCommand(_.TextManager.command['navigate'], 'navigate');
  this.addCommand(_.TextManager.command['asset'], 'asset');
  this.addCommand(_.TextManager.command['system'], 'system');
};

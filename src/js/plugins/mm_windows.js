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

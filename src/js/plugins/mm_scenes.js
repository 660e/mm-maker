(() => {
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
})();

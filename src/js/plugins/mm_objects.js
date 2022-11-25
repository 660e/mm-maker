// ----------------------------------------------------------------------
// Game_System
// ----------------------------------------------------------------------

Game_System.prototype.windowPadding = function () {
  return 24;
};

Game_System.prototype.windowOpacity = function () {
  return 255;
};

// ----------------------------------------------------------------------
// Game_Actor
// ----------------------------------------------------------------------

Game_Actor.prototype.setDrive = function (tankId) {
  this.__drive = tankId;
};

Game_Actor.prototype.getDrive = function () {
  return this.__drive || 0;
};

// ----------------------------------------------------------------------
// Game_Party
// ----------------------------------------------------------------------

Game_Party.prototype.actors = function () {
  return this._actors.filter(e => $dataActors[e].meta.class === 'actor').map(e => $gameActors.actor(e));
};

Game_Party.prototype.tanks = function () {
  return this._actors.filter(e => $dataActors[e].meta.class === 'tank').map(e => $gameActors.actor(e));
};

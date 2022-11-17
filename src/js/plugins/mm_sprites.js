// ----------------------------------------------------------------------
// Sprite_Gauge
// ----------------------------------------------------------------------

Sprite_Gauge.prototype.bitmapWidth = function () {
  return $q.col_3;
};

Sprite_Gauge.prototype.bitmapHeight = function () {
  return $q.itemHeight;
};

Sprite_Gauge.prototype.textHeight = function () {
  return $q.fontSize2;
};

Sprite_Gauge.prototype.gaugeHeight = function () {
  return $q.gaugeHeight;
};

Sprite_Gauge.prototype.gaugeX = function () {
  return 0;
};

Sprite_Gauge.prototype.labelY = function () {
  return $q.padding.y;
};

Sprite_Gauge.prototype.labelFontSize = function () {
  return $q.fontSize2;
};

Sprite_Gauge.prototype.valueFontSize = function () {
  return $q.fontSize2;
};

Sprite_Gauge.prototype.currentValue = function () {
  if (this._battler) {
    switch (this._statusType) {
      case 'hp':
        return this._battler.hp;
      case 'sp':
        return this._battler.mp;
    }
  }
  return NaN;
};

Sprite_Gauge.prototype.currentMaxValue = function () {
  if (this._battler) {
    switch (this._statusType) {
      case 'hp':
        return this._battler.mhp;
      case 'sp':
        return this._battler.mmp;
    }
  }
  return NaN;
};

Sprite_Gauge.prototype.label = function () {
  switch (this._statusType) {
    case 'hp':
      return $t.interface.hp;
    case 'sp':
      return $t.interface.sp;
    default:
      return '-';
  }
};

Sprite_Gauge.prototype.gaugeBackColor = function () {
  return $c.damage;
};

Sprite_Gauge.prototype.gaugeColor1 = function () {
  switch (this._statusType) {
    case 'hp':
      return $c.health;
    case 'sp':
      return $c.soukou;
    default:
      return $c.normal;
  }
};

Sprite_Gauge.prototype.gaugeColor2 = function () {
  switch (this._statusType) {
    case 'hp':
      return $c.health;
    case 'sp':
      return $c.soukou;
    default:
      return $c.normal;
  }
};

Sprite_Gauge.prototype.labelColor = function () {
  return $c.normal;
};

Sprite_Gauge.prototype.labelOutlineColor = function () {
  return $c.normal;
};

Sprite_Gauge.prototype.labelOutlineWidth = function () {
  return 0;
};

Sprite_Gauge.prototype.valueColor = function () {
  return $c.normal;
};

Sprite_Gauge.prototype.valueOutlineColor = function () {
  return $c.normal;
};

Sprite_Gauge.prototype.valueOutlineWidth = function () {
  return 0;
};

Sprite_Gauge.prototype.drawGauge = function () {
  const gaugeX = this.gaugeX();
  const gaugeY = $q.padding.y + this.textHeight() + 3;
  const gaugewidth = this.bitmapWidth();
  const gaugeHeight = this.gaugeHeight();
  this.drawGaugeRect(gaugeX, gaugeY, gaugewidth, gaugeHeight);
};

Sprite_Gauge.prototype.drawGaugeRect = function (x, y, width, height) {
  const rate = this.gaugeRate();
  const fillW = Math.floor((width - 2) * rate);
  const fillH = height;
  const color0 = this.gaugeBackColor();
  const color1 = this.gaugeColor1();
  const color2 = this.gaugeColor2();
  this.bitmap.fillRect(x, y, width, height, color0);
  this.bitmap.gradientFillRect(x, y, fillW, fillH, color1, color2);
};

var objects;
(function (objects) {
    class Label extends createjs.Text {
        constructor(labelString, fontSize, fontFamily, fontColour, x = 0, y = 0, isCentered = false) {
            super(labelString, fontSize + " " + fontFamily, fontColour);
            this.Width = this.getBounds().width;
            this.Height = this.getBounds().height;
            if (isCentered) {
                this.regX = this.HalfWidth;
                this.regY = this.HalfHeight;
            }
            this.x = x;
            this.y = y;
        }
        get Width() {
            return this._width;
        }
        set Width(newValue) {
            this._width = newValue;
            this.HalfWidth = this._width * 0.5;
        }
        get Height() {
            return this._height;
        }
        set Height(newValue) {
            this._height = newValue;
            this.HalfHeight = this._height * 0.5;
        }
        get HalfWidth() {
            return this._halfWidth;
        }
        set HalfWidth(newValue) {
            this._halfWidth = newValue;
        }
        get HalfHeight() {
            return this._halfHeight;
        }
        set HalfHeight(newValue) {
            this._halfHeight = newValue;
        }
    }
    objects.Label = Label;
})(objects || (objects = {}));
//# sourceMappingURL=Label.js.map
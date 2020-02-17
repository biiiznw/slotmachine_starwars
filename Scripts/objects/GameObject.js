var objects;
(function (objects) {
    class GameObject extends createjs.Bitmap {
        constructor(imageString) {
            super(config.Game.ASSETS.getResult(imageString));
            this.name = imageString;
            this._initialize();
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
        _initialize() {
            this.Width = this.getBounds().width;
            this.Height = this.getBounds().height;
            this.Start();
        }
    }
    objects.GameObject = GameObject;
})(objects || (objects = {}));
//# sourceMappingURL=GameObject.js.map
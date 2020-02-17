var objects;
(function (objects) {
    // Button class used for clickable buttons
    class Button extends objects.GameObject {
        // constructor
        /**
         *Creates an instance of Button.
         * @param {string} imageString
         * @param {number} [x=0]
         * @param {number} [y=0]
         * @param {boolean} [isCentered=false]
         */
        constructor(imageString, x = 0, y = 0, isCentered = false) {
            super(imageString);
            // private instance variables
            this._isEnabled = false;
            if (isCentered) {
                this.regX = this.HalfWidth;
                this.regY = this.HalfHeight;
            }
            this.x = x;
            this.y = y;
            // Need to bind the event handlers to the Button instance for "this" to work properly
            this._out = this._out.bind(this);
            this._over = this._over.bind(this);
            this.IsEnabled = true;
        }
        // public properties
        get IsEnabled() {
            return this._isEnabled;
        }
        set IsEnabled(newValue) {
            if (this._isEnabled != newValue) {
                this._isEnabled = newValue;
                if (newValue) {
                    this.alpha = 1;
                    //this.mouseoverFunc = this.on("mouseover", this._over)
                    //this.mouseoutFunc = this.on("mouseout", this._out)
                    this.addEventListener("mouseover", this._over);
                    this.addEventListener("mouseout", this._out);
                }
                else {
                    this.alpha = 0.5;
                    //this.off("mouseover", this.mouseoverFunc);
                    //this.off("mouseout", this.mouseoutFunc);
                    this.off("mouseover", this._over);
                    this.off("mouseout", this._out);
                }
            }
        }
        // private methods
        // event handlers
        _over(event) {
            this.alpha = 0.7; // 70% opacity
        }
        _out(event) {
            this.alpha = 1.0; // 100% opacity
        }
        // public methods
        Start() {
        }
        Update() {
        }
        Reset() {
        }
        Destroy() {
        }
    }
    objects.Button = Button;
})(objects || (objects = {}));
//# sourceMappingURL=Button.js.map
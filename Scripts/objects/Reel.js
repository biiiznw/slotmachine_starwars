var objects;
(function (objects) {
    class Reel extends objects.GameObject {
        constructor(imageString) {
            super(imageString);
            this.Start();
        }
        Start() {
            this.y = 210;
        }
        Update() {
        }
        Reset() {
        }
        Destroy() {
        }
    }
    objects.Reel = Reel;
})(objects || (objects = {}));
//# sourceMappingURL=Reel.js.map
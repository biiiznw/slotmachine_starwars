module objects {
    export abstract class GameObject extends createjs.Bitmap {
        private _width: number;
        private _height: number;
        private _halfWidth: number;
        private _halfHeight: number;
        get Width(): number {
            return this._width;
        }
        set Width(newValue: number) {
            this._width = newValue;
            this.HalfWidth = this._width * 0.5;
        }
        get Height(): number {
            return this._height;
        }
        set Height(newValue: number) {
            this._height = newValue;
            this.HalfHeight = this._height * 0.5;
        }
        get HalfWidth(): number {
            return this._halfWidth;
        }
        set HalfWidth(newValue: number) {
            this._halfWidth = newValue;
        }
        get HalfHeight(): number {
            return this._halfHeight;
        }
        set HalfHeight(newValue: number) {
            this._halfHeight = newValue;
        }
        constructor(imageString: string) {
            super(config.Game.ASSETS.getResult(imageString));
            this.name = imageString;
            this._initialize();
        }
        private _initialize(): void {
            this.Width = this.getBounds().width;
            this.Height = this.getBounds().height;
            this.Start();
        }
        public abstract Start(): void

        public abstract Update(): void

        public abstract Reset(): void

        public abstract Destroy(): void

    }
}
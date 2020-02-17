var scenes;
(function (scenes) {
    class Start extends objects.Scene {
        constructor() {
            super();
            this.Start();
        }
        Main() {
            this.addChild(this._background);
            this.addChild(this._playButton);
            this._playButton.on("click", () => {
                config.Game.SCENE_STATE = scenes.State.PLAY;
                createjs.Sound.stop();
            });
        }
        Start() {
            this._playButton = new objects.Button("playButton", 320, 420, true);
            this._background = new objects.Background("startBackground");
            createjs.Sound.play("starwars");
            this.Main();
        }
        Update() {
        }
        Reset() {
        }
        Destroy() {
            super.Destroy();
        }
    }
    scenes.Start = Start;
})(scenes || (scenes = {}));
//# sourceMappingURL=Start.js.map
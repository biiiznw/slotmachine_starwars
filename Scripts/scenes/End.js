var scenes;
(function (scenes) {
    class End extends objects.Scene {
        // public properties
        // constructors
        constructor() {
            super();
            this.Start();
        }
        // private methods
        // private ByBye(){
        //     createjs.Sound.play("haha");
        // }
        // public methods
        Main() {
            // adds background to the stage
            this.addChild(this._background);
            // adds restartButton to the stage
            this.addChild(this._restartButton);
            // adds player to the stage
            this.addChild(this._gameOverLabel);
            // event listeners
            // starts the play scene after restart is clicked
            this._restartButton.on("click", () => {
                config.Game.SCENE_STATE = scenes.State.PLAY;
                createjs.Sound.stop();
            });
        }
        Start() {
            // Instantiates objects
            this._restartButton = new objects.Button("restartButton", 320, 360, true);
            this._background = new objects.Background("endBackground");
            createjs.Sound.play("shutdown");
            this._gameOverLabel = new objects.Label("GAME OVER - GOOD BYE", "30px", "Helvetica", "#FFFFFF", 320, 240, true);
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
    scenes.End = End;
})(scenes || (scenes = {}));
//# sourceMappingURL=End.js.map
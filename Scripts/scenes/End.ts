module scenes{
    export class End extends objects.Scene{
        // private instance variables
        
        private _background:objects.Background;
        private _gameOverLabel:objects.Label;
        private _restartButton:objects.Button;

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

        public Main(): void {
            
            // adds background to the stage
            this.addChild(this._background);

            // adds restartButton to the stage
            this.addChild(this._restartButton);

            // adds player to the stage
            this.addChild(this._gameOverLabel);

            // event listeners

            // starts the play scene after restart is clicked
            this._restartButton.on("click", ()=>{
                config.Game.SCENE_STATE = scenes.State.PLAY;
                createjs.Sound.stop();
            })
        }        
        public Start(): void {
            // Instantiates objects
            this._restartButton = new objects.Button("restartButton", 320, 360, true);
            this._background = new objects.Background("endBackground");
            createjs.Sound.play("shutdown");

            this._gameOverLabel = new objects.Label("GAME OVER - GOOD BYE", "30px", "Helvetica", "#FFFFFF", 320, 240, true);

            this.Main();
        }
        public Update(): void {
        }
        public Reset(): void {
        }
        public Destroy(): void {
            super.Destroy();
        }


    }
}
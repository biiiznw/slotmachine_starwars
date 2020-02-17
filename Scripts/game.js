let game = (function () {
    let canvas;
    let stage;
    let assetManager;
    let currentScene;
    let currentState;
    let assetManifest = [
        { id: "slotMachine", src: "./Assets/images/slotMachine.png" },
        { id: "startBackground", src: "./Assets/images/startBackground.png" },
        { id: "playBackground", src: "./Assets/images/playBackground.png" },
        { id: "endBackground", src: "./Assets/images/endBackground.png" },
        { id: "restartButton", src: "./Assets/images/button_restart.png" },
        { id: "quitButton", src: "./Assets/images/button_quit.png" },
        { id: "resetButton", src: "./Assets/images/button_reset.png" },
        { id: "spinButton", src: "./Assets/images/button_spin.png" },
        { id: "playButton", src: "./Assets/images/button_play.png" },
        { id: "banana", src: "./Assets/images/icon.png" },
        { id: "bar", src: "./Assets/images/lightsaber.png" },
        { id: "cherry", src: "./Assets/images/chubaca.png" },
        { id: "grapes", src: "./Assets/images/yoda.png" },
        { id: "lemon", src: "./Assets/images/trooper.png" },
        { id: "orange", src: "./Assets/images/r2d2.png" },
        { id: "spin", src: "./Assets/images/spin.png" },
        { id: "seven", src: "./Assets/images/vader.png" },
        { id: "blank", src: "./Assets/images/blank.png" },
        { id: "playing", src: "./Assets/sounds/R2D2a.wav" },
        { id: "happy", src: "./Assets/sounds/happy.mp3" },
        { id: "shutdown", src: "./Assets/sounds/shutdown.wav" },
        { id: "starwars", src: "./Assets/sounds/starwars.mp3" }
    ];
    function Preload() {
        assetManager = new createjs.LoadQueue();
        config.Game.ASSETS = assetManager;
        assetManager.installPlugin(createjs.Sound);
        assetManager.loadManifest(assetManifest);
        assetManager.on("complete", Start);
    }
    function Start() {
        console.log(`%c Game Started...`, "color: blue; font-size: 20px;");
        canvas = document.getElementsByTagName("canvas")[0];
        config.Game.PLAYER = document.getElementsByTagName("input")[0];
        stage = new createjs.Stage(canvas);
        config.Game.STAGE = stage;
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", Update);
        currentState = scenes.State.START;
        config.Game.SCENE_STATE = scenes.State.START;
        Main();
    }
    function Update() {
        if (currentState != config.Game.SCENE_STATE) {
            currentState = config.Game.SCENE_STATE;
            Main();
        }
        stage.update();
        currentScene.Update();
    }
    function Main() {
        if (currentScene != null) {
            currentScene.Destroy();
            stage.removeAllChildren();
        }
        config.Game.PLAYER.style.display = "none";
        switch (currentState) {
            case scenes.State.START:
                currentScene = new scenes.Start;
                break;
            case scenes.State.PLAY:
                currentScene = new scenes.Play;
                break;
            case scenes.State.END:
                currentScene = new scenes.End;
                break;
        }
        stage.addChild(currentScene);
    }
    window.addEventListener("load", Preload);
})();
//# sourceMappingURL=game.js.map
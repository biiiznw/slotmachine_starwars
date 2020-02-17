var scenes;
(function (scenes) {
    class Play extends objects.Scene {
        // public variables
        // constructor
        constructor() {
            super();
            this.Start();
        }
        //#############################################################
        // DISPLAY SPIN RESULTS
        //#############################################################
        DisplayResults() {
            this.RemoveOldResult();
            for (let index = 0; index < this._spinResult.length; index++) {
                let result = this._spinResult[index];
                this._reels[index] = new objects.Reel(result);
                this._reels[index].x = this._reelObjXLocation[index];
                this.addChild(this._reels[index]);
            }
        }
        //#############################################################
        // REMOVE SPIN RESULT
        //#############################################################
        RemoveOldResult() {
            for (let index = 0; index < this._reels.length; index++) {
                this.removeChild(this._reels[index]);
            }
        }
        //#############################################################
        // SPIN RESULTS
        //#############################################################
        Reels() {
            {
                var betLine = [" ", " ", " "];
                var outCome = [0, 0, 0];
                for (var spin = 0; spin < 3; spin++) {
                    outCome[spin] = Math.floor((Math.random() * 65) + 1);
                    switch (outCome[spin]) {
                        case this.checkRange(outCome[spin], 1, 27): // 41.5% probability
                            betLine[spin] = "blank";
                            this._blanks++;
                            break;
                        case this.checkRange(outCome[spin], 28, 37): // 15.4% probability
                            betLine[spin] = "grapes";
                            this._grapes++;
                            break;
                        case this.checkRange(outCome[spin], 38, 46): // 13.8% probability
                            betLine[spin] = "banana";
                            this._bananas++;
                            break;
                        case this.checkRange(outCome[spin], 47, 54): // 12.3% probability
                            betLine[spin] = "orange";
                            this._oranges++;
                            break;
                        case this.checkRange(outCome[spin], 55, 59): //  7.7% probability
                            betLine[spin] = "cherry";
                            this._cherries++;
                            break;
                        case this.checkRange(outCome[spin], 60, 62): //  4.6% probability
                            betLine[spin] = "bar";
                            this._bars++;
                            break;
                        case this.checkRange(outCome[spin], 63, 64): //  3.1% probability
                            betLine[spin] = "lemon";
                            this._lemons++;
                            break;
                        case this.checkRange(outCome[spin], 65, 65): //  1.5% probability
                            betLine[spin] = "seven";
                            this._sevens++;
                            break;
                    }
                }
                return betLine;
            }
        }
        /* This function calculates the player's winnings, if any */
        DetermineWinnings() {
            if (this._blanks == 0) {
                if (this._grapes == 3) {
                    this._winnings = this._playerBet * 10;
                }
                else if (this._bananas == 3) {
                    this._winnings = this._playerBet * 20;
                }
                else if (this._oranges == 3) {
                    this._winnings = this._playerBet * 30;
                }
                else if (this._cherries == 3) {
                    this._winnings = this._playerBet * 40;
                }
                else if (this._bars == 3) {
                    this._winnings = this._playerBet * 50;
                }
                else if (this._lemons == 3) {
                    this._winnings = this._playerBet * 75;
                }
                else if (this._sevens == 3) {
                    this._winnings = this._playerBet * 100;
                }
                else if (this._grapes == 2) {
                    this._winnings = this._playerBet * 2;
                }
                else if (this._bananas == 2) {
                    this._winnings = this._playerBet * 2;
                }
                else if (this._oranges == 2) {
                    this._winnings = this._playerBet * 3;
                }
                else if (this._cherries == 2) {
                    this._winnings = this._playerBet * 4;
                }
                else if (this._bars == 2) {
                    this._winnings = this._playerBet * 5;
                }
                else if (this._lemons == 2) {
                    this._winnings = this._playerBet * 10;
                }
                else if (this._sevens == 2) {
                    this._winnings = this._playerBet * 20;
                }
                else if (this._sevens == 1) {
                    this._winnings = this._playerBet * 5;
                }
                else {
                    this._winnings = this._playerBet * 1;
                }
                this.showWinMessage();
            }
            else {
                this.showLossMessage();
            }
        }
        //#############################################################
        // JACKPOT MESSAGE
        //#############################################################
        /* Check to see if the player won the jackpot */
        checkJackPot() {
            /* compare two random values */
            var jackPotTry = Math.floor(Math.random() * 51 + 1);
            var jackPotWin = Math.floor(Math.random() * 51 + 1);
            if (jackPotTry == jackPotWin) {
                alert("You Won the $" + this._jackpot + " Jackpot!!");
                this._playerMoney += this._jackpot;
                this._jackpot = 5000;
            }
        }
        //#############################################################
        // SOUNDS
        //#############################################################
        /* Utility function to show a win message and increase player money */
        showWinMessage() {
            createjs.Sound.play("happy");
            this._playerMoney += this._winnings;
            this.ResetFruitTally();
            this.checkJackPot();
        }
        /* Utility function to show a loss message and reduce player money */
        showLossMessage() {
            createjs.Sound.play("playing");
            this._playerMoney -= this._playerBet;
            this.ResetFruitTally();
        }
        /* Utility function to check if a value falls within a range of bounds */
        checkRange(value, lowerBounds, upperBounds) {
            if (value >= lowerBounds && value <= upperBounds) {
                return value;
            }
            else {
                return !value;
            }
        }
        // event handlers
        ResetEvent(event) {
            this.Reset();
        }
        End(event = null) {
            config.Game.SCENE_STATE = scenes.State.END;
            this.Destroy();
        }
        /* When the player clicks the spin button the game kicks off */
        Spin(event) {
            this._spinResult = this.Reels();
            // method to display results on reel
            this.DisplayResults();
            this.DetermineWinnings();
        }
        //Update Methods
        // Changes to over scene if money is 0 or below
        CheckMoney() {
            if (this._playerMoney <= 0) {
                this.End();
            }
        }
        // Checks and updates the bet amount
        // Hides spin button if invalid bet
        CheckInput() {
            if (!isNaN(Number(config.Game.PLAYER.value))) {
                this._playerBet = parseInt(config.Game.PLAYER.value);
                if (this._playerBet <= this._playerMoney && this._playerBet > 0) {
                    if (!this._btnSpin.IsEnabled) {
                        this._btnSpin.IsEnabled = true;
                        this._btnSpin.addEventListener("click", this.Spin);
                    }
                }
                else {
                    this._btnSpin.IsEnabled = false;
                    this._btnSpin.off("click", this.Spin);
                }
            }
            else {
                this._btnSpin.IsEnabled = false;
                this._btnSpin.off("click", this.Spin);
            }
        }
        // public methods
        /* Utility function to reset the player stats */
        ResetFruitTally() {
            this._grapes = 0;
            this._bananas = 0;
            this._oranges = 0;
            this._cherries = 0;
            this._bars = 0;
            this._lemons = 0;
            this._sevens = 0;
            this._blanks = 0;
        }
        // places the objects in the play scene
        Main() {
            this.addChild(this._playBackground);
            this.addChild(this._slotMachine);
            this.addChild(this._lblBetting);
            this.addChild(this._lblJackpot);
            this.addChild(this._lblmoney);
            this.addChild(this._btnQuit);
            this.addChild(this._btnReset);
            this.addChild(this._btnSpin);
            this.addChild(this._btnBet100);
        }
        // instatniates the Play scene
        Start() {
            // // resets the bet input field
            config.Game.PLAYER.value = "";
            config.Game.PLAYER.style.display = "block";
            // Background
            this._playBackground = new objects.Background("playBackground");
            this._slotMachine = new objects.Background("slotMachine");
            // Label
            this._lblBetting = new objects.Label("Bet:", "20px", "Helvetica", "#000000", 250, 350, false);
            this._lblJackpot = new objects.Label("Jackpot:", "20px", "Helvetica", "#000000", 260, 150, false);
            this._lblmoney = new objects.Label("Money:", "20px", "Helvetica", "#000000", 260, 302, false);
            // Button 
            this._btnQuit = new objects.Button("quitButton", 250, 415, true);
            this._btnReset = new objects.Button("resetButton", 325, 415, true);
            this._btnSpin = new objects.Button("spinButton", 400, 415, true);
            // this._btnBet100 = new objects.Button("spinButton",200,300,true);
            // Reel array. The individual reels are created after each spin
            this._reels = new Array();
            // instantiates the x coordinates for the reels
            this._reelObjXLocation = new Array();
            this._reelObjXLocation[0] = 230;
            this._reelObjXLocation[1] = 302;
            this._reelObjXLocation[2] = 376;
            // Places the slot machine in the center of the canvas
            this._slotMachine.x = (-20);
            // Binding event handlers to the play scene
            this.End = this.End.bind(this);
            this.ResetEvent = this.ResetEvent.bind(this);
            this.Spin = this.Spin.bind(this);
            // event listeners
            this._btnQuit.addEventListener("click", this.End);
            this._btnReset.addEventListener("click", this.ResetEvent);
            this.Main();
            this.Reset();
        }
        Update() {
            this.CheckInput();
            this._lblJackpot.text = "Jackpot: $" + this._jackpot;
            this._lblmoney.text = "Money: $" + this._playerMoney;
            this._lblBetting.text = "Bet: $" + this._playerBet;
            this.CheckMoney();
        }
        Reset() {
            this._spinResult = ["spin", "spin", "spin"];
            this.DisplayResults();
            this.ResetFruitTally();
            this._playerMoney = 1000;
            this._winnings = 0;
            this._jackpot = 5000;
            this._playerBet = 0;
        }
        Destroy() {
            super.Destroy();
        }
    }
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=Play.js.map
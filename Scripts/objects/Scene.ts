module objects{
    export abstract class Scene extends createjs.Container
    {
        constructor() {
            super();
        }
        public abstract Main():void;

        public abstract Start():void;

        public abstract Update():void;

        public abstract Reset():void;

        public Destroy():void {
            this.removeAllEventListeners;
            this.removeAllChildren;
        }


    }  
} 
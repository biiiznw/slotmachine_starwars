module objects {
    export class Reel extends objects.GameObject {
        constructor(imageString:string) {
            super(imageString);
            this.Start();
        }
        public Start(): void {
            this.y = 210;
        }        
        public Update(): void {
        }
        public Reset(): void {
        }
        public Destroy(): void {
        }

    }
}
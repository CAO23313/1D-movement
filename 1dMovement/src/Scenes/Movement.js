class Movement extends Phaser.Scene {
    constructor(){
        super('sceneName');
        this.my = {sprite: {}};

        this.bodyX = 400;
        this.bodyY = 350;
    }
    preload() {
        this.load.setPath("./assets/");
        this.load.image("avatar", "character_squareRed.png");
        this.load.image("bullet", "character_handRed.png");

    }
    create() {
        let my = this.my;
        this.body = this.add.sprite(this.bodyX, this.bodyY, "avatar");
        this.shot = this.add.sprite(this.bodyX, this.bodyY, "bullet");
        this.shot.visible = false;

        let left;
        this.left = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        let right;
        this.right = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        let emit;
        this.emit = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }
    update() {
        let my = this.my;

        if (this.left.isDown) {
            this.body.x = this.body.x - 10;
            //this.shot.x = this.shot.x - 10;
            if(this.body.x <= 20) {
                this.body.x = 20;
                this.shot.x = 20;
            }
        }
        if (this.right.isDown) {
            this.body.x = this.body.x + 10;
            //this.shot.x = this.shot.x + 10;
            if(this.body.x >= 780) {
                this.body.x = 780;
                this.shot.x = 780;
            }
        }
        if (this.emit.isDown) {
            if(!this.shot.visible) {
                this.shot.x = this.body.x;
                this.shot.y = this.body.y;
                this.shot.visible = true;
            }

        }
        if (this.shot.visible) {
            this.shot.y = this.shot.y - 25;
            if(this.shot.y <= 0) {
                this.shot.visible = false;
            }
        }
    }
}
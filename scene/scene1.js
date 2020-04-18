class Scene1 extends Phaser.Scene {
    constructor() {
        super('title');
    }

    preload() {
        this.load.image('background', "assets/background.png");
        this.load.spritesheet('ship', 'assets/ship.png', {
            frameWidth: 16,
            frameHeight: 16
        });
        this.load.spritesheet('ship2', 'assets/ship2.png', {
            frameWidth: 32,
            frameHeight: 16
        });
        this.load.spritesheet('ship3', 'assets/ship3.png', {
            frameWidth: 32,
            frameHeight: 32
        });
        this.load.spritesheet('explosion', 'assets/explosion.png', {
            frameWidth: 16,
            frameHeight: 16
        })
        this.load.spritesheet('power-up', 'assets/power-up.png', {
            frameWidth: 16,
            frameHeight: 16
        })
        this.load.spritesheet('player', 'assets/player.png', {
            frameWidth: 16,
            frameHeight: 24
        })
        this.load.spritesheet('beam', 'assets/beam.png', {
            frameWidth: 16,
            frameHeight: 16
        })
    }

    create() {
        // animation
        this.anims.create({
            key: 'ship1_anim',
            frames: this.anims.generateFrameNumbers('ship'),
            frameRate: 20,
            repeat: -1
        })

        this.anims.create({
            key: 'ship2_anim',
            frames: this.anims.generateFrameNumbers('ship2'),
            frameRate: 20,
            repeat: -1
        })

        this.anims.create({
            key: 'ship3_anim',
            frames: this.anims.generateFrameNumbers('ship3'),
            frameRate: 20,
            repeat: -1
        })

        this.anims.create({
            key: 'explode',
            frames: this.anims.generateFrameNumbers('explosion'),
            frameRate: 20,
            repeat: 0,
            hideOnComplete: true
        })

        this.anims.create({
            key: 'red',
            frames: this.anims.generateFrameNumbers('power-up', {
                start: 0,
                end: 1
            }),
            frameRate: 20,
            repeat: -1
        })

        this.anims.create({
            key: 'grey',
            frames: this.anims.generateFrameNumbers('power-up', {
                start: 2,
                end: 3
            }),
            frameRate: 20,
            repeat: -1
        })

        this.anims.create({
            key: 'thrust',
            frames: this.anims.generateFrameNumbers('player'),
            frameRate: 20,
            repeat: -1
        })

        this.anims.create({
            key: 'shoot',
            frames: this.anims.generateFrameNumbers('beam'),
            frameRate: 20,
            repeat: -1
        })

        this.scene.start('main');
    }
}
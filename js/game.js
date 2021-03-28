function preload () {
    this.load.image('bg', 'assets/classroom.png');
    this.load.image('student', 'assets/character.png');
}

function create () {
    let background = this.add.image(0, 0, 'bg');
    background.setOrigin(0, 0);
    let student = this.add.image(500, 750, 'student');
    student.setScale(0.2, 0.2);
}

function update () {
}

let config = {
    type: Phaser.AUTO,
    width: 1648,
    height: 900,
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300},
            debug: false
        }
    }
}

let game = new Phaser.Game(config);
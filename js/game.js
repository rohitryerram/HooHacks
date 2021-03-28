var student;
var button;
var classroom;
var playground;

function preload () {
    this.load.image('classroom', 'assets/classroom.png');
    this.load.image('student', 'assets/character.png');
    this.load.image('playground', 'assets/playground.png');
}

function create () {
    classroom = this.add.image(0, 0, 'classroom');
    playground = this.add.image(0, 0, 'playground');
    playground.visible = false;
    classroom.setOrigin(0, 0);
    playground.setOrigin(0, 0);
    student = this.physics.add.sprite(500, 750, 'student');
    student.setCollideWorldBounds(true);
    student.setScale(0.2, 0.2);
    cursors = this.input.keyboard.createCursorKeys();
}

function update () {
    if (student.x == 300 && student.y == 750) {
        classroom.visible = false;
        playground.visible = true;
    }
    if (cursors.left.isDown) {
        student.x -= 4;
    }
    else if (cursors.right.isDown) {
        student.x += 4;
    }
    else if (cursors.up.isDown) {
        student.y -= 4;
    }
    else if (cursors.down.isDown) {
        student.y += 4;
    }
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
            debug: false
        }
    }
}

let game = new Phaser.Game(config);
var student;

function preload () {
    this.load.image('bg', 'assets/classroom.png');
    this.load.image('student', 'assets/character.png');
}

function create () {
    let background = this.add.image(0, 0, 'bg');
    background.setOrigin(0, 0);
    student = this.add.sprite(500, 750, 'student');
    student.setScale(0.2, 0.2);
    cursors = this.input.keyboard.createCursorKeys();
}

function update () {
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
    }
}

let game = new Phaser.Game(config);
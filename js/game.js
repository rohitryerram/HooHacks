// Declaring variables that will be needed throughout functions
var student;
var button;
var classroom;
var playground;
var backgroundCounter = 0;

// Preload frunction needed in Phaser. This loads all images before the student can interact.
function preload () {
    this.load.image('classroom', 'assets/classroom.png');
    this.load.image('student', 'assets/character.png');
    this.load.image('playground', 'assets/playground.png');
}

// Create function needed in Phaser. This creates the classroom environment based on images loaded in preload.
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

// Update function needed in Phaser. Handles game movement and room transitions.
function update () {

    // Checking if the student is leaving the room and changing the background if needed.
    if (student.x == 300 && (student.y > 700 && student.y < 850) && backgroundCounter == 0) {
        classroom.visible = false;
        playground.visible = true;
        student.x += 1000;
        backgroundCounter = 1;
    }
    else if (student.x == 1300 && (student.y > 700 && student.y < 850) && backgroundCounter == 1) {
        playground.visible = false;
        classroom.visible = true;
        student.x -= 800;
        backgroundCounter = 0;
    }

    // Listening for keyboard input to control student movement.
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

// Configurating the Phaser settings.
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

// Creating a Phaser Game object with the configurations set above.
let game = new Phaser.Game(config);
class Monster {
    constructor(speed) {
        this.health = 50
        this.src = "goomba.png"
        this.speed = speed;
    }

    attack = function() {
        alert('I am a bad monster. Run for your life!');
    };

    toString() {
        return 'This function can display whatever we want';
    }
}

class FlyingMonster extends Monster {
    attack = function() {
        console.log('I am a different monster');
    }
}

const monster1 = new Monster(30);
const flyingMonster1 = new FlyingMonster(400);

console.log(monster1.toString())
console.log(flyingMonster1.attack())

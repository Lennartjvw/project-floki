var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Background = (function () {
    function Background() {
        var container = document.getElementById("container");
        this.background = document.createElement("container");
        this.background.style.backgroundImage = "url(images/bakground_game-01.png)";
        container.appendChild(this.background);
        this.background.style.backgroundSize = "1200px 800px";
    }
    return Background;
}());
var GameObject = (function () {
    function GameObject(object) {
        console.log("This object has been created: " + object);
    }
    GameObject.prototype.getPositionX = function () {
        return this.x;
    };
    return GameObject;
}());
var Weapon = (function (_super) {
    __extends(Weapon, _super);
    function Weapon(whatWeapon) {
        _super.call(this, "weapon");
        this.width = 50;
        this.height = 50;
        console.log("And the weapon is an: " + this.whatWeapon);
        this.whatWeapon = whatWeapon;
        this.lastKey = Character.getLastKey();
    }
    Weapon.prototype.draw = function (lastKey, x) {
        this.startPositionX = x;
        if (this.lastKey == 0) {
            this.weaponSpeed = 25;
            this.weaponDirection = 1;
        }
        if (this.lastKey == 1) {
            this.weaponDirection = -1;
            this.weaponSpeed = -25;
        }
        this.x += this.weaponSpeed;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px) scaleX(" + this.weaponDirection + ")";
    };
    Weapon.prototype.getX = function () {
        return this.x;
    };
    Weapon.prototype.getY = function () {
        return this.y;
    };
    return Weapon;
}(GameObject));
var Axe = (function (_super) {
    __extends(Axe, _super);
    function Axe(x, y) {
        _super.call(this, "axe");
        var container = document.getElementById("container");
        this.div = document.createElement("axe");
        container.appendChild(this.div);
        this.x = x;
        this.y = y;
    }
    return Axe;
}(Weapon));
var Game = (function () {
    function Game() {
        var _this = this;
        this.axeArray = [];
        console.log("The game has started!");
        this.background = new Background();
        this.character = new Character(0, 600, 65, 68, 32, this);
        var container = document.getElementById("container");
        requestAnimationFrame(function () { return _this.gameLoop(); });
    }
    Game.prototype.addAxe = function (axe) {
        this.axeArray.push(axe);
    };
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.character.draw();
        this.character.update();
        for (var _i = 0, _a = this.axeArray; _i < _a.length; _i++) {
            var axe = _a[_i];
            axe.draw(Character.getLastKey(), this.character.getPositionX());
        }
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
var Character = (function (_super) {
    __extends(Character, _super);
    function Character(x, y, left, right, space, game) {
        _super.call(this, "Character");
        this.width = 75;
        this.height = 200;
        this.direction = 1;
        this.leftSpeed = 0;
        this.rightSpeed = 0;
        this.axes = new Array();
        this.axeArray = [];
        var container = document.getElementById("container");
        this.div = document.createElement("character");
        container.appendChild(this.div);
        this.x = x;
        this.y = y;
        this.leftkey = left;
        this.rightkey = right;
        this.spacebar = space;
        this.game = game;
        this.behaviour = new startJumping(this);
        window.addEventListener("keydown", this.onKeyDown.bind(this));
        window.addEventListener("keyup", this.onKeyUp.bind(this));
    }
    Character.prototype.getX = function () {
        return this.x;
    };
    Character.prototype.getY = function () {
        return this.y;
    };
    Character.prototype.setY = function (y) {
        this.y = y;
    };
    Character.prototype.update = function () {
        this.behaviour.performBehaviour();
    };
    Character.getLastKey = function () { return Character.lastKey; };
    Character.prototype.onKeyDown = function (event) {
        if (event.keyCode == 65) {
            this.leftSpeed = 7;
            console.log("A was pressed (left)");
            Character.lastKey = 1;
            this.direction = -1;
        }
        else if (event.keyCode == 68) {
            this.rightSpeed = 7;
            console.log("D was pressed (right)");
            Character.lastKey = 0;
            this.direction = 1;
        }
        else if (event.keyCode == 32) {
            this.startJumping();
        }
        else if (event.keyCode == 75) {
            this.attack();
        }
    };
    Character.prototype.onKeyUp = function (event) {
        if (event.keyCode == 65) {
            this.leftSpeed = 0;
        }
        else if (event.keyCode == 68) {
            this.rightSpeed = 0;
        }
    };
    Character.prototype.draw = function () {
        this.x = this.x - this.leftSpeed + this.rightSpeed;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px) scaleX(" + this.direction + ")";
    };
    Character.prototype.startJumping = function () {
        this.behaviour.startJumping();
    };
    Character.prototype.attack = function () {
        console.log("K was pressed (attack)");
        this.game.addAxe(new Axe(this.x, this.y + 55));
        console.log("There are " + this.axeArray.length + " axes in the array");
    };
    Character.lastKey = 0;
    return Character;
}(GameObject));
var Enemy = (function (_super) {
    __extends(Enemy, _super);
    function Enemy(whatEnemy) {
        _super.call(this, "enemy");
        this.width = 100;
        this.height = 200;
        console.log("And the enemy is an: " + whatEnemy);
        var container = document.getElementById("container");
        this.div = document.createElement(whatEnemy);
        container.appendChild(this.div);
    }
    Enemy.prototype.draw = function () {
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    Enemy.prototype.getX = function () {
        return this.x;
    };
    Enemy.prototype.getY = function () {
        return this.y;
    };
    return Enemy;
}(GameObject));
var Utils = (function () {
    function Utils() {
    }
    Utils.prototype.hasOverlap = function (c1, c2) {
        return !(c2.getX() > c1.getX() + c1.width || c2.getX() + c2.width < c1.getX() || c2.getY() > c1.getY() + c1.height || c2.getY() + c2.height < c1.getY());
    };
    return Utils;
}());
var Idle = (function () {
    function Idle(c) {
        this.character = c;
    }
    Idle.prototype.performBehaviour = function () {
        console.log("Behaviour update");
    };
    Idle.prototype.startJumping = function () {
    };
    return Idle;
}());
var startJumping = (function () {
    function startJumping(c) {
        this.goingDown = false;
        this.jumpLimit = 550;
        console.log("Behaviour Jump!");
        this.character = c;
        this.jump_y = this.character.getY();
    }
    startJumping.prototype.performBehaviour = function () {
    };
    startJumping.prototype.startJumping = function () {
        var _this = this;
        console.log("jump");
        var y = this.character.getY();
        this.timer = setInterval(function () {
            if (y > _this.jumpLimit && !_this.goingDown) {
                y -= 10;
                _this.character.setY(y);
            }
            else {
                _this.goingDown = true;
                y += 10;
                _this.character.setY(y);
                if (y == _this.jump_y) {
                    clearInterval(_this.timer);
                    _this.goingDown = false;
                }
            }
        }, 25);
    };
    return startJumping;
}());
var Archer = (function (_super) {
    __extends(Archer, _super);
    function Archer(x, y) {
        _super.call(this, "archer");
        this.x = x;
        this.y = y;
    }
    return Archer;
}(Enemy));
var Bow = (function (_super) {
    __extends(Bow, _super);
    function Bow(x, y) {
        _super.call(this, "bow");
        this.x = x;
        this.y = y;
    }
    return Bow;
}(Weapon));
//# sourceMappingURL=main.js.map
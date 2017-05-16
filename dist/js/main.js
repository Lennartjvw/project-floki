var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GameObject = (function () {
    function GameObject(object) {
        console.log("This object has been created:" + object);
    }
    return GameObject;
}());
var Character = (function (_super) {
    __extends(Character, _super);
    function Character(x, y, left, right) {
        _super.call(this, "Character");
        this.leftSpeed = 0;
        this.rightSpeed = 0;
        var container = document.getElementById("container");
        this.div = document.createElement("character");
        container.appendChild(this.div);
        this.x = x;
        this.y = y;
        this.leftkey = left;
        this.rightkey = right;
        window.addEventListener("keydown", this.onKeyDown.bind(this));
        window.addEventListener("keyup", this.onKeyUp.bind(this));
    }
    Character.prototype.onKeyDown = function (event) {
        if (event.keyCode == 65) {
            this.leftSpeed = 10;
            console.log("A was pressed (left)");
        }
        else if (event.keyCode == 68) {
            this.rightSpeed = 10;
            console.log("D was pressed (right)");
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
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Character;
}(GameObject));
var Game = (function () {
    function Game() {
        var _this = this;
        console.log("The game has started!");
        this.character = new Character(0, 750, 65, 68);
        var container = document.getElementById("container");
        requestAnimationFrame(function () { return _this.gameLoop(); });
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.character.draw();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
//# sourceMappingURL=main.js.map
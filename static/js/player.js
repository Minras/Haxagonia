var Player = Player || {};

Player.init = function(name, pos, race, hp)
{
    this.name = name;
    this.pos = pos;
    this.race = race;
    this.hp = hp === undefined ? 100 : hp;
}
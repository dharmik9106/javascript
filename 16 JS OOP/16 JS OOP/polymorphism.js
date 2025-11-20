

class Player1{
    constructor(game){
        this.game = game;

    }

    gamePlaying(){
        return this.game;

    }
}
const p11 = new Player1("ff");

console.log(p11);

class multiPlayer extends Player1 {

    constructor(game){
        super (game);
    }
    gamePlaying(){
        return this.game ;

    }
}
const s33 =  new multiPlayer( "football");

console.log(s33);

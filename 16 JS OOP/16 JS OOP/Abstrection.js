

class Bike{
    #enginestatus = "off";

    enginestart(){
        console.log("engine started");

        this.#enginestatus ="on";

    }
    engineoff(){
        console.log("engine off");
        this.#enginestatus ="off";

    }

    enginestatus(){
       return this.#enginestatus;

    }
}
const Bike1 = new Bike();

Bike1.enginestart();

console.log(Bike1.enginestatus());

Bike1.engineoff();

console.log(Bike1.enginestatus());

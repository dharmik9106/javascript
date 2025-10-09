

let unit = 100;

let bill ;

if (unit <= 100){

    bill = unit * 10;
}else if ( unit<= 100){
    bill = 100*10 + (unit - 100) *20;

}
else if (unit > 300){
    bill = 100* 10 + 100 * 20  + (unit - 200 )*40;

}
console.log ("total bill is ", bill)
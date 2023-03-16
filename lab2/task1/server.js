var myMod = require("./module");

console.log(myMod);
let myClass = myMod.myClass;

let user = new myClass();

user.ReservTicket(15,3,"borg el arab airport","dubai airport","15-3-2023");
user.ReservTicket(19,4,"cairo airport","kewait airport","17-3-2023");

user.UpdateTicket(15,3,"sharm el sheikh airport","dubai airport","15-3-2023");
user.DisplayTickets();
user.GetTicket(19);
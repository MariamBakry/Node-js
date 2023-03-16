class myClass{
    tickets = [];
    ReservTicket(seatNum, flightNum,  departureAir, arivAir, travDate){
        let ticket = {seatNum, flightNum, departureAir, arivAir, travDate};
        this.tickets.push(ticket);
    }

    GetTicket(seatNum){
        for(let i=0; i<this.tickets.length; i++){
            if(this.tickets[i].seatNum == seatNum){
                console.log(this.tickets[i]);
            }
        }
    }

    DisplayTickets(){
        for(let i=0; i<this.tickets.length; i++){
            console.log(this.tickets[i]);
        }
    }

    UpdateTicket(seatNum, flightNum, departureAir, arivAir, travDate){
        for(let i=0; i<this.tickets.length; i++){
            if(this.tickets[i].seatNum == seatNum){
                this.tickets[i].flightNum = flightNum;
                this.tickets[i].departureAir = departureAir;
                this.tickets[i].arivAir = arivAir;
                this.tickets[i].travDate = travDate;
            }
        }
    }
}

module.exports = {
    myClass
}
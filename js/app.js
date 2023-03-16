let tickets_sold=1000;
let venue_capacity=2000;
let performer="mark"
let is_sold_out=false;
if(is_sold_out === true){
 console.log("All Sold Out")
}else{
    console.log("Tickets Are Still Available")
}
if(tickets_sold / venue_capacity >=0.9){
    console.log("Almost Sold Out")
}
if(tickets_sold / venue_capacity>=0.5){
    console.log("tickets selling fast")
}else{
    console.log("Tickets On Sale Now")
}
if(tickets_sold > venue_capacity){
    console.log("error")
}
if(tickets_sold < venue_capacity === is_sold_out === true){
    console.log("system error")
}
if(performer = "mark" === is_sold_out === false){
    console.log("error in system")
} else {
    console.log("all good")
}
let is_repeat_show
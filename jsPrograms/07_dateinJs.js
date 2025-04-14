let myDate=new Date()
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toUTCString());
// console.log(myDate.getTimezoneOffset());
// console.log(typeof myDate); //=> it is object

// let myCreatedDate=new Date(2023,0,23); //created own date format=> here month count start from 0
// //  here 2023=> year, 0=> month(jan-here month start from 0 in js),23=> day adn Monday means day automatic show
// console.log(myCreatedDate.toDateString());


// let myCreatedDate=new Date(2023, 0, 23, 5, 3); //created own date and time format=>
// //  here 2023=> year, 0=> month(jan-here month start from 0 in js),23=> day and Monday means
// //  day automatic show, 5=> hour, 3=> minute and default show sec and AM or PM
// console.log(myCreatedDate.toLocaleString())


let myCreatedDate=new Date("02-20-2024"); //created own date format=> here month count start from 01 because 
// console.log(myCreatedDate.toLocaleDateString());

//--------------------Time Stamp--------------------------

let myTimeStamp= Date.now()

// console.log(myTimeStamp); //it give milisecond value
// console.log(myCreatedDate.getTime());//it give milisecond value
// console.log(Math.floor(Date.now()/1000));//it give value in second but compare value in milisecond

let newDate=new Date()
// console.log(newDate.getTime());
// console.log(newDate.getFullYear());
// console.log(newDate.getMonth()); // Output=>2 mean March(index start from 0 that's why)
// console.log(newDate.getTime());
// console.log(newDate.getDate());

console.log(newDate.toLocaleString('default',{
    weekday:"long", 
})) //Output=> Friday
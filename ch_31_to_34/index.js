var uname = prompt("enter you name");
var bd = prompt("enter your DOB (date) as dd")
var bm = parseInt(prompt("enter your DOB (Month) as mm"),10)
var by = +prompt("enter your DOB (Year) as yyyy")
var month = ["january", "February", "March", "April", "May", "June", "July", "August", "September", "October","November", "December"]

var now  = new Date;
var nowhours = now.getHours()
var greetings = "";

var ur_dob = new Date(month[bm-1]+ " " + bd + "," + " " + by);

var age = (now.getFullYear() - by);
var age_in_days = Math.ceil((now - ur_dob)/(1000*60*60*24))
var age_in_hours = Math.ceil((now - ur_dob)/(1000*60*60))


if ((now.getMonth()+1) < bm) {
       
        var days_to_bd = ((bm -(now.getMonth()+1))*30)+ (bd-now.getDate())
        
    }
       
else if ( (now.getMonth()+1) === bm) {
    
    if (now.getDate() < bd) {
    days_to_bd = (bd-now.getDate())
    }
    else{
        days_to_bd = ((bm -(now.getMonth()+1))*30)+ (bd-now.getDate())
        if (days_to_bd < 0){
            days_to_bd = 365+(days_to_bd)
        }
    }
}

else{
    days_to_bd = (((12-(now.getMonth()+1))+ bm)* 30)+(bd-now.getDate())
}



if ((now.getMonth() === ur_dob.getMonth()) &&  ((now.getDay() === ur_dob.getDay()) === 0)){

    console.log("its yourbrthday tody")
}




if(nowhours >= 04 && nowhours < 12 ){
        greetings = "Good Morning";
}

else if(nowhours >= 12 && nowhours < 17 ){
    greetings = "Good Afternoon";
}

else if(nowhours >= 17 && nowhours < 21 ){
    greetings = "Good Evening";
}

else{
    greetings = "Good Night";
}


var msg_uname = "Hello " + uname + " " +greetings
console.log(msg_uname)
console.log("Your Dob is ", ur_dob)



console.log(" you are " + age + " years old")
console.log("Your age in Days is " , age_in_days)
console.log("Your age in Hours is " , age_in_hours)

if (days_to_bd === 0){
    console.log("Happy Birthday", uname,  "!!!")
}
else{
console.log("Days to your Birthday:  " , days_to_bd)
}





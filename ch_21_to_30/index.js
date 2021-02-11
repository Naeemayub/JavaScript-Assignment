var i = parseFloat(prompt("ente your number"));
i = Math.ceil(i);
var s = "this is my dummy text"
var s2 = s.slice(0,4);
var revs2= "";
var temp;
console.log("ceiled number entered by user " + i)
console.log("My string: " + s)
console.log("sliced string 0-4:  " + s2)



for(var a=0 ; a<4 ; a++){
    temp = s2[a]
    revs2 = temp.concat(revs2);
       
}
console.log("revserd text: ", revs2);
var a = 2;
var b = a++ + ++a - --a + a--;
     // 2   + 4   -  3  +  3   = 6
alert("variable " + a)
alert("variable " + b)
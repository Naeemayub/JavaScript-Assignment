var str = prompt("Please enter you phrase, i will convert it to initial caps")
str = str+ " ";
var word = "";
var iter = ""
var interim_word = "";
var final = "";
var first_char = "";
var ready = "";
var lp = -1
var strlength = ((str.length)-1)
console.log(strlength)

for(var i=0 ;i< str.length; i++){
        
    if ((str[i] === " ") || (i===0)){
            for (var p=i; p>lp; p--){
                    
                    if((str[(p-1)]!== " ") && (i!==0)){
                        iter = str[p].toLocaleLowerCase()  
                        interim_word = iter.concat(interim_word)
                        iter= "";
                        
                    }

                    else{
                        first_char = str[p].toUpperCase();
                        
            
                    }
        
        
                } 
                lp = i
                final = first_char + interim_word
                first_char = "";
                interim_word = "";
                iter = "";

            } 



        ready = ready + final
        final  = "";


    }
    console.log(ready)
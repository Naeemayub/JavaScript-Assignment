var inputValue = prompt("Convert conten into capitalize")
var titledText = "";

function convert(str){

    for (var i= 0; i<str.length; i++){
        if ((i===0) || (str[i-1] === " ")) {
        
            titledText=titledText+str[i].toUpperCase();
        }
        else{
            
        
                titledText=titledText+str[i].toLowerCase();
            }

        } 
    
        console.log(" Converted Text as Titled Case: ", titledText)
    }
console.log(" Original Text: ", inputValue)
convert(inputValue)

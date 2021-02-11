var num = parseInt(prompt("please enter a number to calculate factorial"));
function fictorial(num){
    
    var loop_var = num;
    var value = num;
    for (var i = 0; i <= loop_var; i++){

        if ((num >= 2)) {   
            value = value*--num;
            if (num===1){
                break;
            }          
        }
        
        else if ((num <= 1)){
            value = 1
        }

        else{   
            
            break;
         }

        


    }

    console.log(value);
}


fictorial(num);





var scores = [];
var T_score=0 ;
var percentage;

for (var i=1; i<6; i++){
    scores.push(+prompt(`Please enter your marks of subject $[i}`))
}

for(var p=0;p<5; p++){
    T_score= T_score + scores[p];
}

function percent(T_score){
        return T_score*100/500;
}


percentage = percent(T_score);


switch(true){
    case(percentage>=90 && percentage <=100):
    alert("Grade 'A+'")
    break;

    case(percentage>=75 && percentage <=89):
    alert("Grade 'A'")
    break;
    
    case(percentage>=60 && percentage <=74):
    alert("Grade 'B'")
    break;
    
    case(percentage>=45 && percentage <=59):
    alert("Grade 'C'")
    break;
    
    case(percentage>=30 && percentage <=44):
    alert("Grade 'D'")
    break;
    
    case(percentage>=0 && percentage <=29):
    alert("Grade 'F'")
    break;

}  
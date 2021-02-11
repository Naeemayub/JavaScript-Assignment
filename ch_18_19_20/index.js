var courses = []
for (var i = 0; i<5; i++){
c1 = prompt("please enter your course")
courses.push(c1)
}
alert(courses);

for (var i = 0; i < 5 ; i++){
    c1 = prompt("course1", courses[i])
    if (c1 !== courses[i]){
    courses.splice(i,1,c1)
}
}

alert(courses)
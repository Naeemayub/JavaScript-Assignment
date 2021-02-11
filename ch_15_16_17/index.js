var courses = []
c1 = prompt("please enter your course")
c2 = prompt("please enter your course")
c3 = prompt("please enter your course")
c4= prompt("please enter your course")
c5 = prompt("please enter your course")
courses.push(c1,c2,c3,c4,c5)
alert(courses);
c1 = prompt("course1", courses[0])
if (c1!== courses[0]){
    courses.splice(0,1,c1)
}
c2 = prompt("course2",courses[1])
if (c2!== courses[1]){
    courses.splice(1,1,c1)
}

c3 = prompt("course3",courses[2])
if (c3!== courses[2]){
    courses.splice(2,1,c3)
}
c4 = prompt("course4",courses[3])
if (c4!== courses[3]){
    courses.splice(3,1,c4)
}
c5 = prompt("course5",courses[4])
if (c5!== courses[4]){
    courses.splice(4,1,c5)
}

alert(courses)
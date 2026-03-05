let Employee = {
    emp_id : 101,
    emp_name : 'Ravi',
    emp_contact :  123456789,
    emp_address : 'Banglore',
    emp_designation : "Developer",
    emp_salary : 100000

}

// console.log(Employee)

// console.log(`Hello I am ${Employee.emp_name} with Eid ${Employee.emp_id}`)

//create object of student of marks  and display in sentence and mobile atleast 8 properties and display in sentence and laptop 8 properties in sentence

// let Student = {
//     stud_name :  "Balu",
//     stud_usn : "068",
//     sub1 : 99,
//     sub2 : 100,
//     sub3 : 98,
//     sub4 : 99

// }

// console.log(`Hello I am ${Student.stud_name} with USN ${Student.stud_usn}  with marks : [${Student.sub1} , ${Student.sub2} , ${Student.sub3} , ${Student.sub4}]`)

let Mobile = {
    brand : "Vivo",
    ram : "8GB",
    rom : "8GB",
    processor : "Snapdragon",
    storage : "128GB",
    camera : "48MP",
    color : "White",
    weight : "178gms"

}

console.log(`Mobile brand : ${Mobile.brand} with RAM : ${Mobile.ram} and ROM : ${Mobile.rom} , Processor : ${Mobile.processor}  , Storage : ${Mobile.storage} , Camera Quality : ${Mobile.camera} , Color : ${Mobile.color} , Weight : ${Mobile.weight} `)

let Laptop = {
    brand : "Lenovo",
    Model : "Lenovo Flex 5",
    ram : "16GB",
    rom : "16GB",
    processor : "Ryzen 5",
    Storage : "512GB",
    price : "65000",
    gpu : "Integrated AMD Radeon Graphics"
}

console.log(`Laptop specs \n Brand : ${Laptop.brand} , Model : ${Laptop.Model} , RAM : ${Laptop.ram} , ROM : ${Laptop.rom} , Processor : ${Laptop.processor} , Storage : ${Laptop.Storage} , Price : ${Laptop.price} , GPU : ${Laptop.gpu}`)

// name,contact ,address ,edu,learning stack,batch no,projects,Languages knowns, Technical Skils.

let me = {
    name : "Balakrishna S M",
    contact : 7795527635,
    address : "Chintamani",
    Education : "B.E CSE",
    Clge_name : "GEC Hassan",
    Learning_stack : "Python Full Stack",
    batch_no : "DCL28JAN",
    projects : ["Neuron-AI for Stem Education","VoiceCare-AI for Health","NewzWrite","Personal Portfolio","Bio-Gen Clone"],
    Languages_known : ["C","Python","Java"],
    technical_skills : ["Frontend","Backend","Database","LLMs","Agentic AI"]
}

console.log("About Me :")
console.log(` I am ${me.name} \n My Contact Number : ${me.contact} \n I live in : ${me.address} \n My Education background : ${me.Education} \n My College Name : ${me.Clge_name} \n My Learning Stack : ${me.Learning_stack} \n My Batch No at DCL : ${me.batch_no} \n My Projects are : ${me.projects} \n Programming Languages Known : ${me.Languages_known} \n My Technical Skills : ${me.technical_skills}`)

// let to print 10 students details each student details are roll no,fname,lname,contact no ,address ,student class, hobbies each 5
let Student1 = {
    usn : "101",
    fname : "Balakrishna",
    lname : "S M",
    contact : 7795527635,
    address : 'Chintamani',
    class : "8th sem",
    hobbies : ["Reading","Writing","Singing","Dancing","Traveling"]
}

console.log(`01. \n USN is ${Student1.usn} \n Fname : ${Student1.fname} \n Lname : ${Student1.lname} \n Contact : ${Student1.contact} \n Address : ${Student1.address} \n Class : ${Student1.class} \n Hobbies : ${Student1.hobbies}`)
let Student2 = {
    usn : "102",
    fname : "Balu",
    lname : "S M",
    contact : 7795527345,
    address : 'Chintamani',
    class : "7th sem",
    hobbies : ["Reading","Writing","Acting","Dancing","Boxing"]
}
console.log(`03. \n USN is ${Student2.usn} \n Fname : ${Student2.fname} \n Lname : ${Student2.lname} \n Contact : ${Student2.contact} \n Address : ${Student2.address} \n Class : ${Student2.class} \n Hobbies : ${Student2.hobbies}`)
let Student3 = {
    usn : "103",
    fname : "krishna",
    lname : "S M",
    contact : 7795527635,
    address : 'Chintamani',
    class : "8th sem",
    hobbies : ["Skating","Writing","Singing","Dancing","Traveling"]
}

console.log(`05. \nUSN is ${Student3.usn} \n Fname : ${Student3.fname} \n Lname : ${Student3.lname} \n Contact : ${Student3.contact} \n Address : ${Student3.address} \n Class : ${Student3.class} \n Hobbies : ${Student3.hobbies}`)
let Student4 = {
    usn : "104",
    fname : "Rahul",
    lname : "M",
    contact : 7795527635,
    address : 'Chintamani',
    class : "8th sem",
    hobbies : ["Reading","Writing","Singing","Dancing","Watching Movies"]
}
console.log(`04. \n  USN is ${Student4.usn} \n Fname : ${Student4.fname} \n Lname : ${Student4.lname} \n Contact : ${Student4.contact} \n Address : ${Student4.address} \n Class : ${Student4.class} \n Hobbies : ${Student4.hobbies}`)
let Student5 = {
    usn : "105",
    fname : "krish",
    lname : "S",
    contact : 7795527635,
    address : 'Chintamani',
    class : "8th sem",
    hobbies : ["Reading","Writing Stories","Singing","Dancing","Trekking"]
}
console.log(`05. \n USN is ${Student5.usn} \n Fname : ${Student5.fname} \n Lname : ${Student5.lname} \n Contact : ${Student5.contact} \n Address : ${Student5.address} \n Class : ${Student5.class} \n Hobbies : ${Student5.hobbies}`)
let Student6 = {
    usn : "106",
    fname : "Kiran",
    lname : "S M",
    contact : 7795527635,
    address : 'Chintamani',
    class : "8th sem",
    hobbies : ["Reading","Writing","Singing","Dancing","Cricket"]
}
console.log(`06. \n USN is ${Student6.usn} \n Fname : ${Student6.fname} \n Lname : ${Student6.lname} \n Contact : ${Student6.contact} \n Address : ${Student6.address} \n Class : ${Student6.class} \n Hobbies : ${Student6.hobbies}`)
let Student7 = {
    usn : "107",
    fname : "Lithin",
    lname : "S M",
    contact : 7795527635,
    address : 'Chintamani',
    class : "8th sem",
    hobbies : ["Reading","Writing","Singing","Dancing","Football"]
}
console.log(`07. USN is ${Student7.usn} \n Fname : ${Student7.fname} \n Lname : ${Student7.lname} \n Contact : ${Student7.contact} \n Address : ${Student7.address} \n Class : ${Student7.class} \n Hobbies : ${Student7.hobbies}`)
let Student8 = {
    usn : "108",
    fname : "Sharanu",
    lname : "S M",
    contact : 7795527635,
    address : 'Chintamani',
    class : "8th sem",
    hobbies : ["Reading","Writing","Singing","Dancing","Soccer"]
}
console.log(`08. \n USN is ${Student8.usn} \n Fname : ${Student8.fname} \n Lname : ${Student8.lname} \n Contact : ${Student8.contact} \n Address : ${Student8.address} \n Class : ${Student8.class} \n Hobbies : ${Student8.hobbies}`)
let Student9 = {
    usn : "109",
    fname : "Nithin",
    lname : "K",
    contact : 7795527635,
    address : 'Chintamani',
    class : "8th sem",
    hobbies : ["Reading","Writing","Singing","Dancing","Watching Horror"]
}
console.log(`09. \n USN is ${Student9.usn} \n Fname : ${Student9.fname} \n Lname : ${Student9.lname} \n Contact : ${Student9.contact} \n Address : ${Student9.address} \n Class : ${Student9.class} \n Hobbies : ${Student9.hobbies}`)
let Student10 = {
    usn : "110",
    fname : "Ravi",
    lname : "A",
    contact : 7795527635,
    address : 'Chintamani',
    class : "8th sem",
    hobbies : ["Reading","Writing","Singing","Dancing","Scrolling Social Media"]
}
console.log(`10. \nUSN is ${Student10.usn} \n Fname : ${Student10.fname} \n Lname : ${Student10.lname} \n Contact : ${Student10.contact} \n Address : ${Student10.address} \n Class : ${Student10.class} \n Hobbies : ${Student10.hobbies}`)

let mt = {
    id : 101,
    name : "mrunal thakur",
    contact : 100,
    dob : '1 aug 1992',
    profession : 'Actress',
    address : "Mumbai",
    Mobile: {
        brand : "Vivo",
        model : 'y75',
        price : 12000,
        color : "white",
    },
}

// destructuring
let {id,name,contact,address,Mobile,profession,dob} = mt
let {brand,price,color,model} = Mobile

console.log(` I am ${name} \n My contact no ${contact} \n My dob is ${dob} \n My profession is ${profession}\n I live in ${address}`)
console.log(`I use ${brand} ${model} it costs ${price} and color is ${color}`)                               

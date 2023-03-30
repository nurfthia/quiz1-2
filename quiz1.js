let message = "benr"
console.log(message)
console.log(typeof message)

message = 123
console.log(message, typeof message)

//let str = "benr"
//let num = 3523
//let course = str + num
//console.log(message, typeof message)

let str = "1.258"
let num = 1 
let total = parseFloat(str) + num 
console.log(total, typeof total)

let data = ["benr", 3523, true]
console.log(data[0])
console.log(data[1])
console.log(data[2])

let user = {
    name: "fathia",
    age: 20,
    faculty: "FKEKK"
}
console.log(user.name,user.age,user.faculty)

let messages = [ 
    {
        name: "usr1",
        date: "6/8/2023",
        msg: "very good video",
        like: 3000
    },
    {
        name: "usr2",
        date: "7/8/2023",
        msg: "very video uploaded",
        like: 10000
    }
]
console.log(messages[1].msg)
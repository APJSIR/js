//const tinderuser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name ="ram"
tinderUser.isLoggedIn = false

//console.log(tinderUser.id);

const regularUser = {
    email: "ram@gmail.com",
    fullname:{
        userfullname: {
            firstname: "ram",
            lastname: "roy"
        }
    }
}

//console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//console.log = {obj1, obj2}
//const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj3 = {...obj1, ...obj2}

console.log(obj3);
users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));

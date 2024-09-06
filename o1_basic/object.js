

const mySym = Symbol("key1")

const JsUser = {
   name: "ram",
   "full name": "baloram",
   [mySym]: "mykey1",
   age: 18,
   email: "ram@gmail.com",
   isLoginDays: false,
   lastLoginDays: ["monday", "saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]); //for "full name": "baloram", this syntax we use <-- console.log(JsUser["full name"]); -->
// // console.log(JsUser.mySym);
// console.log(typeof JsUser[mySym]);


JsUser.email = "ram@google.com"
// Object.freeze(JsUser)
JsUser.email = "ram@chatgpt.com"
// console.log(JsUser);

JsUser.greeting = function(){
   console.log("heoll js user");  
}

JsUser.greetingTwo = function(){
   console.log(`Hello Js User, ${this.name}`);
   
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
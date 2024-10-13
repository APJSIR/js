const user = {
username: "rabin",
price: 999,


 welcomeMessage: function() {
    console.log(`${this.username}, wellcome to website`);
    console.log(this);
    
 }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

console.log(this);

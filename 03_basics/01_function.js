


function sayMyName() {
    console.log("R");
    console.log("A");
    console.log("M");
}

// sayMyName()

// function addTwoNumber(n1, n2) {
//     console.log(n1 + n2);
// }

// addTwoNumber(5,29)
// const result = addTwoNumber(5,29)

// function loginUserMessage(username) {
//     return `${username} just logged in`

// }

// console.log(loginUserMessage("RAM"));

// function loginUserMessage(username) {
//     if (username === undefined) {
//         console.log("please enter a username");
//         return
//     }
//     return `${username} just logged in`

// }

// // console.log(loginUserMessage("RAM"));
// console.log(loginUserMessage());


function loginUserMessage(username = "sam") {
    if (!username) {
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`

}

// console.log(loginUserMessage("RAM"));
console.log(loginUserMessage("ram"));
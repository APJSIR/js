//const coding = ["js", "java", "cpp", "py"]

// coding.forEach(function (val) {
//     console.log(val);
// })

// coding.forEach((val)=>{
//     console.log(val);
// })

// function printMe(item) {
//     console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach((item, index, arr)=>{
//     console.log(item,index, arr);
    
// })

const myCoding = [
    {
        languageName: "java",
        languageFileName:"java"
    },
    {
        languageName: "python",
        languageFileName:"py"
    },
    {
        languageName: "javaScript",
        languageFileName:"js"
    },
]
myCoding.forEach((item)=>{
    console.log( item.languageFileName);
})
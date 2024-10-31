//const coding = []


//const myNums = [1,2,3,4,5,6,7,8]
//const newNums = myNums.filter( (num) => num > 4)

// const newNums = myNums.filter( (num) => {
//     return num > 4
// })
// const newNums = []

// myNums.forEach( (num) => { 
//     if (num > 4) {
//         newNums.push(num)
//     }
// })
//console.log(newNums); 
const books = [
    {
        genre: "History",
        title: "Guns, Germs, and Steel",
        author: "Jared Diamond",
        publishingYear: 1997,
        latestEditionYear: 2017
    },
    {
        genre: "History",
        title: "A People's History of the United States",
        author: "Howard Zinn",
        publishingYear: 1980,
        latestEditionYear: 2015
    },
    {
        genre: "History",
        title: "The History of the Ancient World",
        author: "Susan Wise Bauer",
        publishingYear: 2007,
        latestEditionYear: 2020
    },
    {
        genre: "Non-fiction",
        title: "Sapiens: A Brief History of Humankind",
        author: "Yuval Noah Harari",
        publishingYear: 2011,
        latestEditionYear: 2018
    },
    {
        genre: "Non-fiction",
        title: "The Immortal Life of Henrietta Lacks",
        author: "Rebecca Skloot",
        publishingYear: 2010,
        latestEditionYear: 2017
    },
    {
        genre: "Non-fiction",
        title: "Educated",
        author: "Tara Westover",
        publishingYear: 2018,
        latestEditionYear: 2020
    },
    {
        genre: "Fiction",
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        publishingYear: 1960,
        latestEditionYear: 2015
    },
    {
        genre: "Fiction",
        title: "1984",
        author: "George Orwell",
        publishingYear: 1949,
        latestEditionYear: 2021
    },
    {
        genre: "Fiction",
        title: "Pride and Prejudice",
        author: "Jane Austen",
        publishingYear: 1813,
        latestEditionYear: 2016
    },
    {
        genre: "Science",
        title: "A Brief History of Time",
        author: "Stephen Hawking",
        publishingYear: 1988,
        latestEditionYear: 2017
    },
    {
        genre: "Science",
        title: "The Selfish Gene",
        author: "Richard Dawkins",
        publishingYear: 1976,
        latestEditionYear: 2016
    },
    {
        genre: "Science",
        title: "The Gene: An Intimate History",
        author: "Siddhartha Mukherjee",
        publishingYear: 2016,
        latestEditionYear: 2020
    }
];

//const usbooks = books.filter((bk)=> bk.genre==='History')
//const usbooks = books.filter((bk)=> bk.publishingYear>= 2010)

let usbooks = books.filter((bk)=> bk.genre==='History')
usbooks = books.filter((bk)=> bk.publishingYear >= 2000)
console.log(usbooks);

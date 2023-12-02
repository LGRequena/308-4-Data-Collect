console.log("Data Collection")

// part 2

let newString = "ID , NAME , OCCUPATION, AGE;\n42, Bruce, Knight, 41 \n57, Bob, Fry Cook, 19 \n63, Blaine, Quiz Master,58 \n98, Bill, Doctor's Assistant, 26";
let newString2 = "Index, Mass (kg), Spring 1 (m), Spring 2 (m);\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";
const updateData = cellTable();
let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";


function splitAndAppend(str, offset) {

str.split("\n").forEach(row => {
    row.split(",").forEach((cell, index) => {
    eval(`cell${index + offset} += cell + " "`);
    });
    
    console.log(row);
});
}

// part 3
splitAndAppend(newString, 0);

splitAndAppend(newString2, 4);


let resultArray = [];

function splitAndPush(str) {
str.split("\n").forEach(row => {
    resultArray.push(row.split(","));
    });
}

splitAndPush(newString);
splitAndPush(newString2);

let cachedArray = resultArray;

console.log(resultArray);
console.log(cachedArray);

// part 4


let resultArray = [
    [ 'ID ', ' NAME ', ' OCCUPATION', ' AGE' ],
    [ '42', ' Bruce', ' Knight', ' 41 ' ],
    [ '57', ' Bob', ' Fry Cook', ' 19 ' ],
    [ '63', ' Blaine', ' Quiz Master', '58 ' ],
    [ '98', ' Bill', ' Doctor\'s Assistant', ' 26' ]
    ];

resultArray.pop();
resultArray.splice(1, 0, [ '48', ' Barry', ' Runner', ' 25' ]);
resultArray.push([ '7', ' Bilbo', ' None', ' 111' ]);
    console.log(resultArray);

let ageSum = 0;

for (let i = 1; i < resultArray.length; i++) {
    ageSum += Number(resultArray[i][3]);
    }

    let averageAge = ageSum / (resultArray.length - 1);
        console.log(averageAge);

// Part 5
let resultArray = [
    [ 'ID ', ' NAME ', ' OCCUPATION', ' AGE' ],
    [ '48', ' Barry', ' Runner', ' 25' ],
    [ '42', ' Bruce', ' Knight', ' 41 ' ],
    [ '57', ' Bob', ' Fry Cook', ' 19 ' ],
    [ '63', ' Blaine', ' Quiz Master', '58 ' ],
    [ '7', ' Bilbo', ' None', ' 111' ]
];

    let csvString = "";

    for (let i = 0; i < resultArray.length; i++) {

    csvString += resultArray[i].join(",");
    if (i < resultArray.length - 1) {
        csvString += "\n";
    }
}
    console.log(csvString);


/**
 * REFACTORING OLD CODE
 *  transform raw data into a formatted array of objects according to a specification. The second stage will have you use the output from the first stage to provide a textual report on the data.
 * Use arrays to store ordered lists of data.
Use objects to store keyed lists of data.
Use conditional logic to process data.
Use loops to handle repetitive tasks.
Transform data according to specifications.
 * 
 */


// Data Collections
// console.log("Hello CodeSandbox!!! This is cool im using Node");

// const movies = [
//     "Willy Wonka",
//     "7 Brides for 7 Brothers",
//     "Interstellar",
//     "Jurassic Park",
//   ];

//   // console.log("1", movies);

//   //Accessing Elements in an Array
//   let firstMovie = movies[0];
//   console.log("this is the first movie: ", firstMovie);
//   let lastMovie = movies[movies.length - 1];
//   console.log(lastMovie);

//   // Populating an Array by Index
//   movies[1] = "Batman";
//   movies[movies.length] = "The Thing";
//   movies[10] = "Shrek";

//   console.log("2", movies.length);

//   movies.length = 4;
//   // console.log(movies);

//   /**
//    * Array Iteration
//    */
//   // [ 'Willy Wonka', 'Batman', 'Interstellar', 'Jurassic Park' ]

//   for (let i = 0; i < movies.length; i++) {
//   console.log(movies[i]);
//   }

//   Methods

//   concat()
//   let yourMovies = ["The Game", "John Wick", "Django Unchained"];
//   let myMovies = ["50 First Dates", "The Grinch", "Step Brothers"];

//   let ourMovies = myMovies.concat(yourMovies, myMovies, yourMovies, myMovies);
//   console.log(ourMovies);
//   the original arrays were untouched
// console.log(yourMovies);
// console.log(myMovies)

// Copy an array with concat
// let yourMoviesCopy = yourMovies.concat();
// console.log(yourMoviesCopy);

// join()
//   let movieString = myMovies.join(" and ");

// console.log(movieString + " all walk into a bar");

//   // push() and unshift() - Adding Elements to an Array

//   // movies =[ 'Willy Wonka', 'Batman', 'Interstellar', 'Jurassic Park' ]
//   // adding to the end
//   movies.push("Trading Places", "Antitrust");

//   // add to the front
//   // movies.unshift("Star Wars");

//   // pop() and shift() - Removing Elements from an Array
//   //pop
//   let removedLastMovie = movies.pop();

//   //shift
//   let movie = movies.shift();

//   // console.log(movies);

//   /**
//    * Splice
//    */

//   let anothaMovies = ["Caddyshack", "Interstellar", "Scarface", "Trading Places"];

//   // anothaMovies.splice(3, 1, "Spaceballs", "Alien");
//   // // removed

//   // anothaMovies.splice(0, 3);

//   // anothaMovies.splice(1, 0, "The Sting");
//   // console.log(anothaMovies);

//   /**
//    * Slice
//    */

//   let middleMovies = anothaMovies.slice(1, 3);
//   // middleMovies => ['Interstellar', 'Scarface']
//   // movies => ['Caddyshack', 'Interstellar', 'Scarface', 'Trading Places']

//   // reverse
//   console.log(anothaMovies.reverse());

//   /**
//    * Nested Arrays
//    */
//   // let numArray = [
//   //   [1, 2, 3],
//   //   [4, 5, 6],
//   //   [7, 8, 9],
//   // ];

//   let numArray = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [
//       [7, 8, 9],
//       [10, 11, 12],
//       [13, 14, 15],
//     ],
//   ];

//   // console.log(numArray[2][1][1]);
//   // console.log(numArray.at(2).at(1).at(-1));

//   let twoD = numArray.flat();

//   let flatStanley = numArray.flat(2);
//   // console.log(flatStanley);
//   // console.log(numArray);

//   /**
//    * Sort
//    */

//   let numArray1 = [4, 8, 1, 0, -14, 22, 77, 1388, 20];
//   let movies1 = [
//     "Shrek",
//     "Alien",
//     "Caddyshack",
//     "Batman",
//     "Interstellar",
//     "Scarface",
//     "Spaceballs",
//     "Alien",
//     "The Count of Monte Cristo",
//   ];

//   numArray1.sort();
//   // movies1.sort();
//   console.log(movies1);

//   /**
//    * indexOf() and lastIndexOf() - Search an Array
//    */

//   // starts searching array from the front
//   let batmanIndex = movies1.indexOf("Alien"); // 1
//   console.log(batmanIndex);

//   // starts searching array from the end
//   movies.lastIndexOf("Alien"); // 7

//   /**
//    * forEach
//    */

//   let movies2 = [
//     "Shrek",
//     "Caddyshack",
//     "Batman",
//     "Interstellar",
//     "Scarface",
//     "Spaceballs",
//     "Alien",
//     "The Count of Monte Cristo",
//   ];

//   movies2.forEach((movie, i) => {
//     console.log(i + ")" + movie);
//   });

//   /**
//    * Spread Operator
//    */
//   let favMovies = ["Home Alone", "Polar Express", "Elf"];

//   let moviesCopy = [...favMovies];

//   let moreMovies = ["Love Actually", ...favMovies, "Christmas Vacation"];

//   console.log(moreMovies);
// //Objects
// const vehicle = {
//     color: "blue",
//     hp: 4000,
//     year: 1989,
//     "active registration": true,
//   };

//   // console.log(vehicle.hp); // 4000
//   // console.log(vehicle["color"]); //blue
//   // console.log(vehicle["active registration"]); // true

//   // Changing Object Properties and Values
//   vehicle.color = "red"; // changing a existing property
//   vehicle.make = "Audi"; // adding a new key:value pair
//   delete vehicle["active registration"]; // removing an existing property
//   vehicle.doors = 4;

//   for (let key in vehicle) {
//     console.log(key + ": " + vehicle[key]);
//     console.log(vehicle.key);
//   }

// Other Objects
//   const car = {
//     color: "blue",
//     year: 1989,
//     make: "Audi",
//     engine: {
//       cylinders: 6,
//       hp: 4000,
//       size: 3.2,
//     },
//     passengers: [
//       {
//         name: "chris",
//         isCool: true,
//       },
//       {
//         name: "Younghyun",
//         isCool: true,
//       },
//     ],
//   };

// const car2 = car;
// delete car2.color;
// console.log(car);

// console.log(car === car2);

// console.log(car.passengers[1].name);

// console.log(car.engine.size);
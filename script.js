// TASK-3

// Question:1

// compare two Json have the same properties without order

// using JSON.stringify () it compare object by value and order of keys also valid.
// if values are same :true
// if values are not same :false

// solution:

let obj1 = {
  name: "person1",
  age: "5"
}
let obj2 = {
  name: "person2",
  age: "5"
}

//using(stringify()
console.log(JSON.stringify(obj1) === JSON.stringify(obj2));//false


// question 2:


// // Rest countries of API Url-display all the countries flags in the console
// // step 1:create a XHR object
let request1 = new XMLHttpRequest();
// //step 2:open a  connection to the server
request1.open("GET", "https://restcountries.com/v3.1/all", true);
// //step3:Intializing a bridge to the server
request1.send();
// //step 4:server response
request1.onload = function () {
  let data = request1.response;
  //   //console.log(data);
  let result = JSON.parse(data);
  //   // console.log(result);
  //   // using loop we can access multiple flag  value
  for (let i = 0; i < result.length; i++) {
    console.log(result[i].flags.png);
  }
}


// question 3:
// print all countries name,region,sub region and population
let req1 = new XMLHttpRequest();
req1.open("GET", "https://restcountries.com/v3.1/all", true);
req1.send();
req1.onload = function () {
  let data1 = req1.response
  let result1 = JSON.parse(data1)
  for (let i = 0; i < result1.length; i++) {
    console.log(result1[i].name.common, '*', result1[i].region, '*', result1[i].subregion, '*', result1[i].population)
  }
}
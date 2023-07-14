/**
 * Task file to understand all loops for iteration on JSON object.
 */

// 1. For the given JSON iterate over all for loops (for in, for of, forEach)

const parsableJSON = {
  name: "Saranya",
  role: "web developer",
  nationality: "indian",
  location: ["Tamil Nadu", "South India", "Asia"],
};

// `for...` loop

// for (let i = 0; i < parsableJSON.location.length; i++) {
//   console.log(i, parsableJSON.location[i]);
// }
// Output

// 0 Tamil Nadu
// 1 South India
// 2 Asia

// `for...in` loop

// for (var k in parsableJSON) {
//   console.log(k, parsableJSON[k]);
// }

// Output

// name Saranya
// role web developer
// nationality indian
// location [ 'Tamil Nadu', 'South India', 'Asia' ]

// `for...of` loop

// for (var val of parsableJSON.location) {
//   console.log(val);
// }

//Output
//Tamil Nadu
// South India
// Asia

// `for...Each` loop
// let item;
// Object.keys(parsableJSON).forEach((item) => {
//   console.log(item);
// });

// Output
//name
// role
// nationality
// location

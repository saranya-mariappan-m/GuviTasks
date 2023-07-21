/**
 * Task file to understand Array Methods on Array of Objects.
 */

// Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.onload = function () {
  const countries = JSON.parse(xhr.responseText);
  console.log(countries);

  // a) Get all the countries from Asia continent /region using Filter function
  //console.log(countries.filter((country) => country.region === 'Asia'));

  // b) Get all the countries with a population of less than 2 lakhs using Filter function
  console.log(countries.filter((country) => country.population < parseInt(200000)));

}

xhr.send()

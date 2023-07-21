/**
 * Task file to understand all OOPS Concepts of Classes, Objects & Properties.
 *
 *
 * The class Movie is stated below. An instance of class Movie represents a
 * film. This class has the following three properties:
 * title, which is a String representing the title of the movie
 * studio, which is a String representing the studio that made the movie
 * rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)
 */

// class Movie {
//     constructor(title, studio, rating) {
//       this.title = title;
//       this.studio = studio;
//       this.rating = rating;
//     }

//   }

  /**
   * a) Write a constructor for the class Movie, which takes a String
   * representing the title of the movie, a String representing the studio,
   * and a String representing the rating as its arguments, and sets the
   * respective class properties to these values.
   */

//   const moviesObj = new Movie('Barbie', 'Heydey Films', 'PG01');

//   console.log(moviesObj);

  /**
   * b) The constructor for the class Movie will set the class property rating
   * to "PG" as default when no rating is provided.
   */

//   class Movie {
//     constructor(title, studio, rating = 'PG') {
//       this.title = title;
//       this.studio = studio;
//       this.rating = rating || 'PG';
//     }

//   }

// const moviesObj02 = new Movie('Oppenheimer', 'Atlas Entertainment');

// console.log(moviesObj02);

/**
 * c) Write a method getPG, which takes an array of base type Movie as its
 * argument, and returns a new array of only those movies in the input array
 *  with a rating of "PG". You may assume the input array is full of Movie
 * instances. The returned array need not be full.
 */
  class Movie {
    constructor(title, studio, rating = 'PG') {
      this.title = title;
      this.studio = studio;
      this.rating = rating || 'PG';
    }

    // getPG(movie) {
    //   let pgMov = [];
    //   let j = 0;
    //   for (let i = 0; i < movie.length; i++) {
    //     if (movie[i].rating == "PG") {
    //     pgMov[j] = movie[i];
    //     j++;
    //     }
    //     }
    //     return pgMov;
    // }

  }
//   const movieList = [
//     {title:'aa',studio:'aa01',rating:'R'},
//     {title:'bb',studio:'bb01',rating:'PG'},
//     {title:'cc',studio:'cc01',rating:'R'},
//     {title:'dd',studio:'dd01',rating:'PG'}
// ];
//   const movieConstructor = new Movie(movieList);
//   const PGlist = movieConstructor.getPG(movieList);
//   console.log(PGlist);

  /**
   * d) Write a piece of code that creates an instance of the class Movie with
   * the title “Casino Royale”, the studio “Eon Productions”, and the rating
   * “PG­13”
   */
//   const movieConstructor = new Movie('Casino Royale','Eon Productions','PG­13');
//   console.log(movieConstructor);
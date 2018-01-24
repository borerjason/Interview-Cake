const flightEntetainment = (length, movies) => {
  let movieCollection = {};

  for (let movie of movies) {
    if(movieCollection[length-movie]) {
      return true;
    }
    movieCollection[movie] = movie;
  }
  return false;
}
module.exports = flightEntetainment;

/*

Strategy: Add all movies to hash, for each movie, subtract value from length and see if remaining value is in movies. 
Given flight length (integer) and array of movie lengths (integers)
return boolean if 2 movies sum equal flight length

*/
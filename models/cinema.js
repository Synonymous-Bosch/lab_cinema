const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getTitles = function () {
  const titles = this.films.map((film) => {return film.title} )
  return titles;

}

// Cinema.prototype.getFilmByTitle = function (title) {
//   let result;
//   this.films.forEach((film) => {
//     if (film.title === title) {
//       result = film;
//     }
//   })
//   return result;
// }

Cinema.prototype.getFilmByTitle = function (title) {
  const result = this.films.filter((film) => {return film.title === title})
  return result[0]
}

Cinema.prototype.getFilmByGenre = function (genre) {
  const result = this.films.filter((film) => {return film.genre === genre})
  return result
}

Cinema.prototype.totalRunningTime = function () {
  const total = this.films.reduce((runningTime, film) => {
    return runningTime + film.length;
  }, 0)
  return total
}

Cinema.prototype.checkFilmByYear = function (year) {
  let result= false;
  this.films.forEach( (film) => {
    if (film.year === year) { 
      result = true 
  }
});
  return result
}

Cinema.prototype.isMinLength = function (length) {
  const result = this.films.filter((film) => {
    return film.length >= length;
  })
  if (result.length === this.films.length) {
    return true;
  } else {
    return false;
  }
}


Cinema.prototype.filmsByProperty = function (property, value) {
  const result = this.films.filter((film) => film[property] === value);
  return result;

}



// Cinema.prototype.getFilmByGenre = function (genre) {
//   const result = this.films.filter((film) => {return film.genre === genre})
//   return result
// }

module.exports = Cinema;

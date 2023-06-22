const assert = require('assert');
const Cinema = require('../models/cinema.js');
const Film = require('../models/film.js');

describe('Cinema', function () {

  let moonlight;
  let bladeRunner;
  let dunkirk;
  let blackPanther;
  let trainspotting;
  let films;
  let cinema;

  beforeEach(function () {
    moonlight = new Film('Moonlight', 'drama', 2016, 111);
    bladeRunner = new Film('Blade Runner 2049', 'sci-fi', 2017, 164);
    dunkirk = new Film('Dunkirk', 'history', 2017, 96);
    blackPanther = new Film('Black Panther', 'action', 2018, 134);
    trainspotting = new Film('T2 Trainspotting', 'drama', 2017, 117);

    films = [moonlight, bladeRunner, dunkirk, blackPanther, trainspotting];
    cinema = new Cinema(films);
  });

  it('should have a collection of films', function () {
    const actual = cinema.films;
    assert.deepStrictEqual(actual, films);
  });

  it('should be able to get a list of film titles', function () {
    const actual = cinema.getTitles();
    assert.deepStrictEqual(actual, ['Moonlight', 'Blade Runner 2049', 'Dunkirk', 'Black Panther', 'T2 Trainspotting'])
  });


  it('should be able to find a film by title', function () {
    const actual = cinema.getFilmByTitle(title='Moonlight');
    assert.strictEqual(actual, moonlight);
  });


  it('should be able to filter films by genre', function () {
    const actual = cinema.getFilmByGenre('drama');
    assert.deepStrictEqual(actual, [moonlight, trainspotting]);
  });


  it('should be able to calculate total running time of all films', function () {
    const actual = cinema.totalRunningTime();
    assert.strictEqual(actual, 622);
  });


  it('should be able to confirm *at least one* film is from a specified year - true case - 1/2', function () {
    const actual = cinema.checkFilmByYear(2017);
    assert.strictEqual(actual, true);
  } );

  it('should be able to confirm *none of* the films are from a specified year - false case - 2/2', function () {    
    const actual = cinema.checkFilmByYear(2010);
    assert.strictEqual(actual, false);});


  it('should be able to confirm whether *all* films are *at least* a specified length (true / false)', function () {
    const actual = cinema.isMinLength(90);
    assert.strictEqual(actual, true);
  });
 
  it('should be able to confirm whether *all* films are *at least* a specified length (true / false)', function () {
    const actual = cinema.isMinLength(120);
    assert.strictEqual(actual, false);
  });
  
  it('should be able to filter films by a property taken as a parameter', function () {
    const actual = cinema.filmsByProperty('genre', 'drama');
    assert.deepStrictEqual(actual, [moonlight, trainspotting])
  })

});

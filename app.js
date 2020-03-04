// use your high school knowledge to calculate prime numbers

const movieList = [
    {
      title: "Batman",
      year: 1989,
      director: "Tim Burton",
      imdbRating: 7.6
    },
    {
      title: "Batman Returns",
      year: 1992,
      director: "Tim Burton",
      imdbRating: 7.0
    },
    {
      title: "Batman Forever",
      year: 1995,
      director: "Joel Schumacher",
      imdbRating: 5.4
    },
    {
      title: "Batman & Robin",
      year: 1997,
      director: "Joel Schumacher",
      imdbRating: 3.7
    },
    {
      title: "Batman Begins",
      year: 2005,
      director: "Christopher Nolan",
      imdbRating: 8.3
    },
    {
      title: "The Dark Knight",
      year: 2008,
      director: "Christopher Nolan",
      imdbRating: 9.0
    },
    {
      title: "The Dark Knight Rises",
      year: 2012,
      director: "Christopher Nolan",
      imdbRating: 8.5
    }
  ];



const output = document.getElementById('output')

const sumFun = movies => { //same as function(movies)
    let sum = 0

    const titles = []

    for (const movie of movieList){
        sum += movie.imdbRating
    }
    return sum;
}

const average = sumFun(movieList) / movieList.length +1

let outputStr = 'The average rating is <h5>' + average + '</h5>'

output.innerHTML = '<h2>' + outputStr + '</h2>'
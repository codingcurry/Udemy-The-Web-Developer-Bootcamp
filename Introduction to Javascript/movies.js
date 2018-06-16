movies = [
	{title: "Pulp Fiction", hasWatched: "You have seen", rating: 4.9},
	{title: "Napoleon Dynamite", hasWatched: "You have seen", rating: 4.5},
	{title: "Titanic", hasWatched: "You have not seen", rating: 4.7},
	{title: "Avengers", hasWatched: "You have not seen", rating: 4.2},
	{title: "Akira", hasWatched: "You have seen", rating: 5.0}
]

movies.forEach(function(movie) {
	console.log(movie.hasWatched + " " + movie.title + " - " + movie.rating + " stars.")
})
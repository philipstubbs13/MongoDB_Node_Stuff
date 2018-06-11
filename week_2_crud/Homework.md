# Week 2 Homework

* Problem 2.1

<pre>db.movieDetails.find({$and: [{"year": 2013 },{"rated": "PG-13"}, {"awards.wins":0}]}, {title: 1, awards:1,  _id: 0});</pre>

* Problem 2.2

<pre>db.movieDetails.find({year: 1964}, {title:1, _id:0})</pre>
<pre>db.movieDetails.find({}, {title:1, _id:0})</pre>

* Problem 2.3

<pre>db.movieDetails.find( { "countries.1": "Sweden" }, {title: 1} ).count()</pre>

* Problem 2.4

<pre>db.movieDetails.find( { "genres": ["Comedy", "Crime"] }, {title: 1, genres:1} )</pre>
<pre>db.movieDetails.find( { "genres": ["Comedy", "Crime"] }, {title: 1, genres:1} ).count()</pre>

* Problem 2.5

<pre>db.movieDetails.find( { "genres": { $all: ["Comedy", "Crime"] } } )</pre>
<pre>db.movieDetails.find( { "genres": { $all: ["Comedy", "Crime"] } } ).count()</pre>
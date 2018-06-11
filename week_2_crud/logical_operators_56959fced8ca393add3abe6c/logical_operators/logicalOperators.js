db.movieDetails.find({ $or : [ { "tomato.meter": { $gt: 99 } },
                               { "metacritic": { $gt: 95 } } ] })


db.movieDetails.find({ $and : [ { "metacritic": { $ne: 100 } },
                                { "metacritic": { $exists: true } } ] })


db.movieDetails.find({$and: [{"year": 2013 },{"rated": "PG-13"}, {"awards.wins":0}]}, {title: 1, awards:1,  _id: 0});



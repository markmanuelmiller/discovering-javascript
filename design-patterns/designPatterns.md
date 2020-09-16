# Design Patterns and Algorithms

## Observer

https://gist.github.com/liqiang372/48b26fc4fe5cd808ad5b9aba63d11b88

## Pub/Sub

## map

```js
Array.prototype.map = function (projectionFunction) {
  var results = [];
  this.forEach(function (itemInArray) {
    results.push(projectionFunction(itemInArray));
  });

  return results;
};

// JSON.stringify([1,2,3].map(function(x) { return x + 1; })) === '[2,3,4]'
```

## filter

To make filtering easier, let's add a filter() function to the Array type. The filter() function accepts a **predicate**. A **predicate** is a function that accepts an item in the array, and returns a boolean indicating whether the item should be retained in the new array.

```js
Array.prototype.filter = function (predicateFunction) {
  var results = [];
  this.forEach(function (itemInArray) {
    if (predicateFunction(itemInArray)) {
      results.push(itemInArray);
    }
  });

  return results;
};

// JSON.stringify([1,2,3].filter(function(x) { return x > 2})) === "[3]"
```

## Chaining

Chain filter and map to collect the ids of videos that have a rating of 5.0

```js
function() {
	var newReleases = [
		{
			"id": 70111470,
			"title": "Die Hard",
			"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": 4.0,
			"bookmark": []
		},
		{
			"id": 654356453,
			"title": "Bad Boys",
			"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": 5.0,
			"bookmark": [{ id: 432534, time: 65876586 }]
		},
		{
			"id": 65432445,
			"title": "The Chamber",
			"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": 4.0,
			"bookmark": []
		},
		{
			"id": 675465,
			"title": "Fracture",
			"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": 5.0,
			"bookmark": [{ id: 432534, time: 65876586 }]
		}
	];

	// ------------ INSERT CODE HERE! -----------------------------------
	// Chain the filter and map functions to select the id of all videos
	// with a rating of 5.0.

  return newReleases.filter(element => {
		return element.rating === 5.0;
	}).map((element) => {
    return element.id;
  }); // Complete this expression
	// ------------ INSERT CODE HERE! -----------------------------------
}

```

## Querying Trees

Sometimes, in addition to flat arrays, we need to query trees. Trees pose a challenge because we need to flatten them into arrays in order to apply filter() and map() operations on them. In this section we'll define a concatAll() function that we can combine with map() and filter() to query trees.

## concatAll

Let's add a concatAll() function to the Array type. The concatAll() function iterates over each sub-array in the array and collects the results in a new, flat array. Notice that the concatAll() function expects each item in the array to be another array.

```js
Array.prototype.concatAll = function () {
  var results = [];
  this.forEach(function (subArray) {
    subArray.forEach((element) => results.push(element));
  });

  return results;
};

// JSON.stringify([ [1,2,3], [4,5,6], [7,8,9] ].concatAll()) === "[1,2,3,4,5,6,7,8,9]"
// [1,2,3].concatAll(); // throws an error because this is a one-dimensional array
```

## map, concatAll, filter

```js
var movieLists = [
  {
    name: "Instant Queue",
    videos: [
      {
        id: 70111470,
        title: "Die Hard",
        boxarts: [
          {
            width: 150,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg",
          },
          {
            width: 200,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg",
          },
        ],
        url: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: 4.0,
        bookmark: [],
      },
      {
        id: 654356453,
        title: "Bad Boys",
        boxarts: [
          {
            width: 200,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg",
          },
          {
            width: 150,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg",
          },
        ],
        url: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: 5.0,
        bookmark: [{ id: 432534, time: 65876586 }],
      },
    ],
  },
  {
    name: "New Releases",
    videos: [
      {
        id: 65432445,
        title: "The Chamber",
        boxarts: [
          {
            width: 150,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg",
          },
          {
            width: 200,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg",
          },
        ],
        url: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: 4.0,
        bookmark: [],
      },
      {
        id: 675465,
        title: "Fracture",
        boxarts: [
          {
            width: 200,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg",
          },
          {
            width: 150,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg",
          },
          {
            width: 300,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg",
          },
        ],
        url: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: 5.0,
        bookmark: [{ id: 432534, time: 65876586 }],
      },
    ],
  },
];

let m = movieLists
  .map(function (movieList) {
    return movieList.videos
      .map(function (video) {
        return video.boxarts
          .filter(function (boxart) {
            return boxart.width === 150 && boxart.height === 200;
          })
          .map(function (boxart) {
            return { id: video.id, title: video.title, boxart: boxart.url };
          });
      })
      .concatAll();
  })
  .concatAll();
```

## concatMap

Nearly every time we flatten a tree we chain map() and concatAll(). Sometimes, if we're dealing with a tree several levels deep, we'll repeat this combination many times in our code. To save on typing, let's create a concatMap function that's just a map operation, followed by a concatAll.

```js
Array.prototype.concatMap = function (projectionFunctionThatReturnsArray) {
  return (
    this.map(function (item) {
      // ------------   INSERT CODE HERE!  ----------------------------
      // Apply the projection function to each item. The projection
      // function will return a new child array. This will create a
      // two-dimensional array.
      // ------------   INSERT CODE HERE!  ----------------------------
      return projectionFunctionThatReturnsArray(item);
    })
      // apply the concatAll function to flatten the two-dimensional array
      .concatAll()
  );
};

/*
	var spanishFrenchEnglishWords = [ ["cero","rien","zero"], ["uno","un","one"], ["dos","deux","two"] ];
	// collect all the words for each number, in every language, in a single, flat list
	var allWords = [0,1,2].
		concatMap(function(index) {
			return spanishFrenchEnglishWords[index];
		});

	return JSON.stringify(allWords) === '["cero","rien","zero","uno","un","one","dos","deux","two"]';
*/
```

## Use concatMap for the same operation above

```js
function() {
	var movieLists = [
			{
				name: "Instant Queue",
				videos : [
					{
						"id": 70111470,
						"title": "Die Hard",
						"boxarts": [
							{ width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
							{ width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
						],
						"url": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 4.0,
						"bookmark": []
					},
					{
						"id": 654356453,
						"title": "Bad Boys",
						"boxarts": [
							{ width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
							{ width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }

						],
						"url": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 5.0,
						"bookmark": [{ id: 432534, time: 65876586 }]
					}
				]
			},
			{
				name: "New Releases",
				videos: [
					{
						"id": 65432445,
						"title": "The Chamber",
						"boxarts": [
							{ width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
							{ width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
						],
						"url": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 4.0,
						"bookmark": []
					},
					{
						"id": 675465,
						"title": "Fracture",
						"boxarts": [
							{ width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
							{ width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
							{ width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
						],
						"url": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 5.0,
						"bookmark": [{ id: 432534, time: 65876586 }]
					}
				]
			}
		];


	// Use one or more concatMap, map, and filter calls to create an array with the following items
	// [
	//	 {"id": 675465, "title": "Fracture", "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
	//	 {"id": 65432445, "title": "The Chamber", "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
	//	 {"id": 654356453, "title": "Bad Boys", "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" },
	//	 {"id": 70111470, "title": "Die Hard", "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" }
	// ];

  return movieLists.concatMap(moveList => {
		return moveList.videos.concatMap(video => {
      return video.boxarts.filter(boxart => {
        return boxart.width === 150 && boxart.height === 200;
      }).map(boxart => {
        return {id: video.id, title: video.title, boxart: boxart.url}
      })
    })
  })
}

```

## reduce

```js
// [1,2,3].reduce(function(accumulatedValue, currentValue) { return accumulatedValue + currentValue; }); === [6];
// [1,2,3].reduce(function(accumulatedValue, currentValue) { return accumulatedValue + currentValue; }, 10); === [16];

Array.prototype.reduce = function (combiner, initialValue) {
  var counter, accumulatedValue;

  // If the array is empty, do nothing
  if (this.length === 0) {
    return this;
  } else {
    // If the user didn't pass an initial value, use the first item.
    if (arguments.length === 1) {
      counter = 1;
      accumulatedValue = this[0];
    } else if (arguments.length >= 2) {
      counter = 0;
      accumulatedValue = initialValue;
    } else {
      throw "Invalid arguments.";
    }

    // Loop through the array, feeding the current value and the result of
    // the previous computation back into the combiner function until
    // we've exhausted the entire array and are left with only one value.
    while (counter < this.length) {
      accumulatedValue = combiner(accumulatedValue, this[counter]);
      counter++;
    }

    return [accumulatedValue];
  }
};
```

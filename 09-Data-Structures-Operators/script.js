// 1
// const [main, secondry] = books;

// const [, , thirdBook] = books;

// const ratings = [['rating', 4.19], ['ratingsCount', 144584]];
// const [[, rating], [, ratingsCount]] = ratings;

// const ratingStars = [63405, 1808];
// const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;

/*// 2
const { title, author, ISBN } = books[0];
console.log(title, author, ISBN);

const { keywords: tags } = books[0];
console.log(tags);

const { language, programmingLanguage = 'unknown' } = books[6];

let bookTitle = 'unknown';
let bookAuthor = 'unknown';
({ bookTitle, bookAuthor } = books[0]);

const {
  thirdParty: {
    goodreads: { rating: bookrating },
  },
} = books[0];


function printBookInfo({ title, author, year = 'unknown' }) {
  console.log(`${title} by ${author}, ${year}`);
}
*/

// // 3
// bookAuthors = [...books[0].author, ...books[1].author];

// function spellWord(word) {
//   console.log(...word);
// }

// // 5
// function hasExamplesInJava(obj){
//   console.log(obj.programmingLanguage == 'Java' ? true : false);
// }

// for (let i = 0; i < books.length; i++) {
//   books[i].onlineContent && console.log(`"${books[i].title}" provides online content`);
// }

// // 8
// let pageSum = 0;
// for(const book of books){
//   pageSum += book.pages;
// }

// const allAuthors = [];
// for(const book of books){
//   if(typeof book.author === 'string'){
//     allAuthors.push(book.author);
//   }else{
//     for(author of book.author){
//       allAuthors.push(author);
//     }
//   }
// }

// for(const [ctr, el] of allAuthors.entries()){
//     console.log(`${ctr + 1}. ${el}`)
// }

/*We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀*/

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
// const [palyersOne, playersTwo] = game.players

// const [gk, ...fieldPlayersOne] =  palyersOne;
// const [gk2, ...fieldPlayersTwo] = playersTwo;

// const allPlayers = [...palyersOne, ...playersTwo];
// console.log(allPlayers)

// const finalPlayersOne = [...palyersOne, "Thiago", "Coutinho", "Perisic"];
// console.log(finalPlayersOne)

// const {odds: {team1, x: draw, team2}} = game
// console.log(team1, draw, team2)

// let printGoals = function(...goals){
//   console.log(goals)
//   for(let i = 0; i < goals.length; i++){
//     console.log(goals[i])
//   }
// }

// printGoals(...game.scored)

// game.odds.team1 < game.odds.team2 && console.log("team one is more likely to win");
// game.odds.team1 > game.odds.team2 && console.log("team two is more likely to win");

// const bookData = [
//   ['title', 'Computer Networking: A Top-Down Approach'],
//   ['author', ['James F. Kurose', 'Keith W. Ross']],
//   ['publisher', 'Addison Wesley'],
// ];

// const pages = 880;
// // Do the rest
// const newBook = {
//   [bookData[0][0]]: bookData[0][1],
//   [bookData[1][0]]: bookData[1][1],
//   [bookData[2][0]]: bookData[2][1],
//   pages,
// };

// function getFirstKeyword(book) {
//   return book.keywords?.[0];
// }

// const entries = [];

// const goodreads = books[0].thirdParty.goodreads;

// for (const x of Object.keys(goodreads)) {
//   entries.push([x]);
// }

// for (const [index, value] of Object.values(goodreads).entries()) {
//   entries[index].push(value);
// }

// const entriesTwo = Object.entries(books[0].thirdParty.goodreads)

// console.log(entries)
// console.log(entriesTwo);

// /*
// Let's continue with our football betting app!

// BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties,
// and the number of goals as the value. In this game, it will look like this:
//       {
//         Gnarby: 1,
//         Hummels: 1,
//         Lewandowski: 2
//       }

// GOOD LUCK 😀
// */

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// for(const [ctr, player] of game.scored.entries()){
//   console.log(`"Goal ${ctr + 1}: ${player}"`)
// }

// sum = 0;
// for(const x of Object.values(game.odds)){
//   sum += x;
// }

// console.log((sum / Object.values(game.odds).length).toFixed(2));

// console.log(Object.values(game))

// for (const [key, value] of Object.entries(game.odds)) {
//   const teamStr = key ==='draw' ? 'draw' : `victory ${game[key]}`;
//   console.log(`Odds of ${teamStr}: ${value}`)
// }

// const scorers = {};

// for(scored of game.scored){
//   scorers[scored] ? scorers[scored]++ : (scorers[scored] = 1);
// }

// console.log(scorers)

// const orderSet = new Set(['pizza', 'pasta', 'pizza', 'pasta']);
// console.log(orderSet);
// console.log(orderSet.has('pizza'))
// console.log(orderSet.has("past"))
// orderSet.add('garlic bread');
// console.log(orderSet)
// orderSet.delete("pizza");
// console.log(orderSet)
// orderSet.clear()
// console.log(orderSet)

// const staff = ['chef', 'waiter', 'manager', 'waiter'];

// const staffUnique = [...new Set(staff)];

// console.log(staffUnique)

// const italianFoods = new Set([
//   'pasta',
//   'gnocchi',
//   'tomatoes',
//   'olive oil',
//   'garlic',
//   'basil',
// ]);

// const mexicanFoods = new Set([
//   'tortillas',
//   'beans',
//   'rice',
//   'tomatoes',
//   'avocado',
//   'garlic',
// ]);

// const commanfoods = italianFoods.intersection(mexicanFoods);

// console.log(commanfoods);

// console.log([...commanfoods]);

// const italianMexicanfusion = italianFoods.union(mexicanFoods);
// console.log(italianMexicanfusion);

// const arrayfusion = [...italianFoods, ...mexicanFoods];

// const arrayfusionTwo = [...new Set(arrayfusion)];

// console.log(arrayfusionTwo);

// const italianMexicandifference = italianFoods.difference(mexicanFoods);
// console.log(italianMexicandifference);

const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: [
      'computer science',
      'programming',
      'algorithms',
      'data structures',
      'java',
      'math',
      'software',
      'engineering',
    ],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: [
      'Harold Abelson',
      'Gerald Jay Sussman',
      'Julie Sussman (Contributor)',
    ],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: [
      'computer science',
      'programming',
      'javascript',
      'software',
      'engineering',
    ],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ['Randal E. Bryant', "David Richard O'Hallaron"],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: [
      'computer science',
      'computer systems',
      'programming',
      'software',
      'C',
      'engineering',
    ],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: [
      'computer science',
      'operating systems',
      'programming',
      'software',
      'C',
      'Java',
      'engineering',
    ],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: [
      'computer science',
      'compilers',
      'engineering',
      'interpreters',
      'software',
      'engineering',
    ],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

// const allKeywords = [];

// for (const book of books) {
//   allKeywords.push(...book.keywords);
// }

// const uniqueKeywords = new Set(allKeywords);

// console.log(uniqueKeywords);

// uniqueKeywords.add('coding');
// uniqueKeywords.add('science');

// uniqueKeywords.delete('business');
// console.log(uniqueKeywords);

// const uniqueKeywordsArr = [...uniqueKeywords];
// console.log(uniqueKeywordsArr);
// uniqueKeywords.clear();
// console.log(uniqueKeywords);
// const bookMap = new Map([
//   ['title', 'Clean Code'],
//   ['author', 'Robert C. Martin'],
// ]);

// bookMap.set('page', 465);
// console.log(bookMap);

// console.log(`${bookMap.get('title')} by ${bookMap.get('author')}`);

// const bookMapSize = bookMap.size;
// console.log(bookMapSize);

// bookMap.get('title') ? console.log('The author of the book is known') : null;

// const firstBookMap = new Map(Object.entries(books[0]));
// console.log(firstBookMap);

// for (const [key, value] of firstBookMap) {
//   if (typeof value === 'number') console.log(key);
// }

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game.
The values are the events themselves, and the keys are the minutes in which each event happened 
(a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair.
 So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" 
(keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half
 (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// const eventSet = [...new Set(gameEvents.values())];
// console.log(eventSet)

// for(const [key, value] of gameEvents){
//   if(key > 64 && value === '🔶 Yellow card'){
//     gameEvents.delete(key);
//   }
// }

// console.log(gameEvents)

// for(const [key, value] of gameEvents){
//   if(key <= 45){
//     console.log(`[FIRST HALF] ${key}: ${value}`);
//   }else{
//     console.log(`[SECOND HALF] ${key}: ${value}`)
//   }
// }

// const airline = 'TAP Air portugal';
// const plane = 'A320';

// console.log(airline.lastIndexOf('r'));
// console.log(airline.slice(8, 10));
// console.log(airline.slice(0, airline.indexOf(' ')));

// console.log(airline.slice(airline.lastIndexOf(' ') + 1, airline.length));

// const priceGB = '288,97]';

// const priceUS = priceGB.replace(']', '$').replace(',', '.');
// console.log(priceUS);

// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('you are not allowed');
//   } else {
//     console.log('you are allowed');
//   }
// };

// checkBaggage('i have a Gun and Knife');
// checkBaggage('i have a food and pasta');

// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   const namesUpper = [];
//   for (let n of names) {
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   const finalName = namesUpper.join(' ');
//   console.log(finalName);
// };

// capitalizeName('mahmoud fawzy helmy mohammed');

// const maskCreditCard = function (number) {
//   const str = number + '';
//   const lastFourChar = str.slice(-4).padStart(str.length, '*');
//   console.log(lastFourChar);
// };

// maskCreditCard(4632918746837126);

/*Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// const btn = document.querySelector('button');

// btn.addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const rows = text.split('\n');

//   for (const [i, row] of rows.entries()) {
//     const [first, second] = row.trim().toLowerCase().split('_');

//     const output = `${first} ${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(`${output.padEnd(20, ' ')} ${'✅'.repeat(i + 1)}`);
//   }
// });

// const flights = `_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30`;

// const flightsArr = flights.split('+');

// for (const flight of flightsArr) {
//   const newFlight = flight.split(';');
//   const [name, from, to, time] = newFlight;
//   let fullName = name.split('_').join(' ').trim();
//   fullName = fullName.startsWith('Delayed') ? '💋 ' + fullName : fullName;
//   console.log(
//     `${fullName} from ${from.toUpperCase().slice(0, 3)} to ${to
//       .toUpperCase()
//       .slice(0, 3)} (${time.replace(':', 'h')})`.padStart(41, ' ')
//   );
// }

const bookings = [];

const createBooking = function (
  flightNum = 'LE32',
  numPassengers = 5,
  price = `${50 * numPassengers}$`
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  bookings.push(booking);
  console.log(bookings);
};

createBooking('LE33');
createBooking('LH12', '200', '60$');

const addMr = function (name) {
  return `MR.` + name;
};

const Hello = function (fn, name) {
  console.log(`Hello ${fn(name)}`);
};

Hello(addMr, 'mahmoud');

const great = (greating) => (name) => console.log(`${greating}, ${name}`);

great('Hello')('mahmoud');

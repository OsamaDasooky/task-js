//q1
function checkValue(variable) {
  if (variable <= 0) {
    return true;
  } else {
    return false;
  }
}
console.log(checkValue(0));

//q2 Print the Next integer from the input number (ex: input= 1 -> next int= 2, input= 12 -> next int= 13)
function nextInt(n1) {
  return n1 + 1;
}
console.log(nextInt(2));

//q3
function checkTypeOfArray(array) {
  resultArr = array.filter((ele) => {
    // if (ele.match(/[0-9]/)) {
    //   return true;
    // }
    if (/[0-9]/.test(ele)) {
      return true;
    }
  });
  return resultArr;
}
console.log(checkTypeOfArray(["osana1", "osana4", "osana", "osana4"]));

//q4 Develop a JS Code to check if a number is even or odd using recursion
function checkEvenOrOdd(number) {
  if (number % 2 == 0) {
    return "even";
  } else if (number % 2 == 1) {
    return "odd";
  } else {
    return "not number";
  }
}

console.log(checkEvenOrOdd("1"));

//q5 Write a function to swap all instances of string ch1 with string ch2 and vice versa (charSwap( "aaddeee", "a", "d") ➞ "ddaaeee")

function swap(string, ch1, ch2) {
  let edit = string.split("").map((ele) => {
    if (ele === ch1) {
      return ch2;
    } else if (ele === ch2) {
      return ch1;
    } else {
      return ele;
    }
  });
  return edit.join("");
}

console.log(swap("aaddeee", "e", "a"));

//q6  Return all the names in this array  [“Rawan", "Jafar", "Muhammad", "Muhammad", "Esraa", “Dareen”]
function name(array) {
  array.forEach((ele) => {
    console.log(ele);
  });
}
name(["Rawan", "Jafar", "Muhammad", "Muhammad", "Esraa", "Dareen"]);

//q7
let newSeries = [
  {
    id: 70111470,
    title: "Die Hard",
    boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [4.0],
    bookmark: [],
  },
  {
    id: 654356453,
    title: "Bad Boys",
    boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }],
  },
  {
    id: 65432445,
    title: "The Chamber",
    boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [4.0],
    bookmark: [],
  },
  {
    id: 675465,
    title: "Fracture",
    boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }],
  },
];
//q8
function idAndTittle(array) {
  result = [];
  array.forEach((ele) => {
    // eleObject = JSON.parse(ele);
    result.push({ id: ele.id, title: ele.title });
  });
  return result;
}

console.log(idAndTittle(newSeries));

//q9 Use map() now to implement the same previous functionality
function idAndTittle2() {
  return newSeries.map((ele) => {
    return { id: ele.id, title: ele.title };
  });
}

console.log(idAndTittle2());
//q10 Use filter() to return the series with a rating under 5
function getUnderFive(array) {
  return array.filter((ele) => {
    return ele.rating < 5;
  });
}
console.log(getUnderFive(newSeries));

//q11
//Use reduce()  function to return the longest string in an array of strings.
function longest(array) {
  return array.reduce((acc, curr) => {
    return acc.length > curr.length ? acc : curr;
  });
}

console.log(longest(["Java", "JavaScript", "Python", "C++", "PHP"]));

//q12 Create a function displayName that, given the pokemon data, below, uses reduce to return an array containing the names of the characters.
let pokemonData = [
  {
    game_index: 76,
    version: {
      name: "red",
      url: "https://pokeapi.co/api/v2/version/1/",
    },
  },
  {
    game_index: 76,
    version: {
      name: "blue",
      url: "https://pokeapi.co/api/v2/version/2/",
    },
  },
  {
    game_index: 76,
    version: {
      name: "yellow",
      url: "https://pokeapi.co/api/v2/version/3/",
    },
  },
  {
    game_index: 132,
    version: {
      name: "gold",
      url: "https://pokeapi.co/api/v2/version/4/",
    },
  },
  {
    game_index: 132,
    version: {
      name: "silver",
      url: "https://pokeapi.co/api/v2/version/5/",
    },
  },
  {
    game_index: 132,
    version: {
      name: "crystal",
      url: "https://pokeapi.co/api/v2/version/6/",
    },
  },
  {
    game_index: 132,
    version: {
      name: "ruby",
      url: "https://pokeapi.co/api/v2/version/7/",
    },
  },
  {
    game_index: 132,
    version: {
      name: "sapphire",
      url: "https://pokeapi.co/api/v2/version/8/",
    },
  },
  {
    game_index: 132,
    version: {
      name: "emerald",
      url: "https://pokeapi.co/api/v2/version/9/",
    },
  },
  {
    game_index: 132,
    version: {
      name: "firered",
      url: "https://pokeapi.co/api/v2/version/10/",
    },
  },
  {
    game_index: 132,
    version: {
      name: "leafgreen",
      url: "https://pokeapi.co/api/v2/version/11/",
    },
  },
  {
    game_index: 132,
    version: {
      name: "diamond",
      url: "https://pokeapi.co/api/v2/version/12/",
    },
  },
];
//a.concat(b.version.name);
//}, []).join(', ');

function displayName(array) {
  return array.reduce((acc, curr) => {
    return acc + curr.version.name + " | ";
  }, "");
}
console.log(displayName(pokemonData));

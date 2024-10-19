const pokemon = require('./data.js')

const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
    
  }
  
//   console.dir(pokemon, { maxArrayLength: null })

//this is how we log a single item in the pokemon data
//since it's an array
// console.log(pokemon[25-1])

/*This logs everything in const game (leh doy) */


/*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


Solve Exercise 3 here:
*/
game.difficulty ='easy'

/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?


Solve Exercise 4 here:
*/


game.party.push(pokemon[0])  ;


/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. 
Which array method will you use to add them?

Solve Exercise 5 here:
*/
//This might not be what I'm supposed to be doing, instructions unclear.
game.party.push(pokemon[123]);
game.party.push(pokemon[15]);
game.party.push(pokemon[103]);

/*make a loop that goes through all 151 returning when matches
on name and use that to get the index... seems psychotic. 
Especially since we were't given the includes funtion afaik...But maybe?
Loop 2D array on name, return index on match, push index to party
Come back to this one
*/




/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 6 here:
*/

// game.gyms[0].completed = true;

for (let i = 0; i < game.gyms.length; i++) {
    if (game.gyms[i].difficulty < 3) {
        game.gyms[i].completed= true;
        
    }
}



/*
Exercise 7
1. Evolve the starter Pokémon you added to your party earlier. 
Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party 
with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the 
Pokemon it evolved into. When working with an array of objects, the splice() 
array method is ideal for replacing one element with another. 

Solve Exercise 7 here:
*/

/*Proud of this one, because the 0th array pokemon is number 1 on the list
we can use it's number to point to it's evolution because it will be 
1 sequence higher.  This question is going to break some ppl */

game.party.splice(0,1, pokemon[game.party[0].number])

/*
Exercise 8
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.


Solve Exercise 8 here:
*/

for (let poke of game.party){
    console.log(poke.name)
}


/*
Exercise 9
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.


Solve Exercise 9 here:
*/
for (let poke of pokemon){
    if (poke.starter === true) {
        console.log(`${poke.name} is a starter!`)
    }
}

/*
Exercise 10
Create a method called `catchPokemon` and add it to the `game` object. You should 
not need to edit the original game object directly. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything

After writing this method, call it and pass in a Pokemon object of your choice 
from the `pokemon` data to catch it.

Solve Exercise 10 here:
*/
// game.catchPokemon = function(pokemonObj){
//     game.party.push(pokemon[pokemonObj])
// } 

// game.catchPokemon(29)


/*
Exercise 11
1. Copy the `catchPokemon` method that you just wrote above, and paste it below. 
Modify it so that it also decreases the number of pokeballs in your inventory 
each time you catch a Pokémon.
2. How will you find and update the quantity of pokeballs in the `game.items` array?

Tips:
For this exercise, it's okay to have a negative number of pokeballs.
After updating the method, call it and pass in a Pokemon object of your choice 
from the `pokemon` data to catch it.
Also, log the `game.items` array to confirm that the pokeball quantity is being 
decremented.

Solve Exercise 11 here:
*/

game.catchPokemon = function(pokemonObj){
    game.party.push(pokemon[pokemonObj])
    game.items[1].quantity--
} 
game.catchPokemon(29)

/*
Exercise 12
1. Similar to Exercise 6, now complete gyms with a difficulty below 6. How 
will you approach this?
 (change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 12 here:
*/
game.completeGym = function(gymObj){
    if(game.gyms[gymObj].difficulty < 6){
        game.gyms[gymObj].completed = true;
    }
}

for (let i = 0; i < game.gyms.length; i++) {
game.completeGym(i)
}

/*
Exercise 13
1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
2. How will you iterate through the `gyms` array and update the tally? Remember 
to log the final tally.

This method should:
  - Not accept any arguments.
  - Initially create a constant `gymTally`, which is an object that has two 
    properties: `completed` and `incomplete`, both of which are initially set to 0.
  - Iterate through the objects in the `game.gyms` array and update the 
    properties on `gymTally` as follows: 
    - `completed` should count how many gyms in the array have a value of `true` 
      for their `completed` property. 
    - `incomplete` should count how many gyms in the array have a value of 
      `false` for their `completed` property.
  - Log the value of `gymTally`.
  - The method should not return anything.

For example, if five gym objects have a value of `true` on their `completed` 
property and three gym objects have a value of `false` on their `completed` 
property, the logged value would be: `{ completed: 5, incomplete: 3 }`.

Solve Exercise 13 here:
*/

game.gymStatus = function(){
    const gymTally = {
        comp: 0,
        inc: 0
    }
    for(let currGym of game.gyms){
        if (currGym.completed === true){
            gymTally.comp++
        } else {
            gymTally.inc++
        }
    }
    console.log(`completed: ${gymTally.comp}, incomplete: ${gymTally.inc}`)
}

game.gymStatus()


/*
Exercise 14
1. Add a `partyCount` method to `game` that counts the number of Pokémon 
in your party.

This method should:
  - Not accept any arguments.
  - Count the number of Pokemon in the party.
  - return the found number of Pokemon in the party.

Solve Exercise 14 here:
*/
game.partyCount = function(){
    console.log(game.party.length)
}

game.partyCount()

/*
Exercise 15
1. Now, complete gyms with a difficulty below 8. Reflect on how this is similar 
to or different from the previous gym exercises.
(change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 15 here:
*/
game.compUnder8 = function(){
    for (let i = 0; i < game.gyms.length; i++) {
        if (game.gyms[i].difficulty < 8){
            game.gyms[i].completed = true;
        }

        }
    
}

game.compUnder8()


/*
Exercise 16
1. Log the entire `game` object to the console. Take a moment to review the 
changes you've made throughout the exercises.


Solve Exercise 16 here:
*/

//console.log(game)


/*
Exercise 17
1. Arrange the Pokémon in `game.party` by their HP. The one with the highest HP should come first.
2. You'll need to use the `.sort()` method. How does the compare function work in sorting numbers?


Solve Exercise 17 here:
*/

//you can do ascending instead of descending if you do a.hp - b.hp


//game.party.sort((a,b) => b.hp - a.hp)

//also interesting... this means JS data types have a default sort comparison value
//which means for text it's probably alphabetical.....

//game.party.sort((a,b) => b.name - a.name) //doesn't seem to be working...

game.party.sort((a,b) => (b.name > a.name) ? 1: -1) //thank you stackoverflow 

//REMINDER to ask instructors why this works this way if we haven't figured it out by the end.
//Mostly wtf is that ? mark about.



/*
Exercise 18
Add a new property to the `game` object called `collection` and initialize its value to an empty array.

Copy the `catchPokemon` method you wrote in Exercise Twelve and paste it below. Modify it so that:
  - Ensure that no more than six Pokemon can be in the party at any time. 
    Excess Pokemon should be placed in the `game.collection` array.
  - It's up to you how to distribute Pokemon in a situation where more than six 
    would be placed into the `game.party` array.

Again, for this exercise, it's okay to have a negative number of pokeballs.

After updating the method, use it by calling it and passing in a pokemon object of your choice from the `pokemon` data to catch it.

Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 18 here:
*/


game.collection = []
//copied from *11

game.catchPokemon = function(pokemonObj){
  if(game.party.length > 5){
    console.log(`You had too many pokemon if your party so ${game.party[(game.party.length-1)].name} was sent to a farm up north`)
    game.party.pop()
    game.party.push(pokemon[pokemonObj])
    game.items[1].quantity--
  } else {
  game.party.push(pokemon[pokemonObj])
  game.items[1].quantity--
  }
  console.log(game.items)

} 

//console.log(game.party)
game.catchPokemon(39)
//console.log(game.party)
game.catchPokemon(66)
//console.log(game.party)
game.catchPokemon(79)

//console.log(game.party)

/*Cool stuff.  A way to approach what the game actually does when you catch your 7th pokemon would be to 
allow the 7th pokemon to be pushed an then immediately pop them after sending the message "Dingus was sent to storage"
potential vulnerability allowing people to exploit party size if you execute poorly*/


/*
Exercise 19
Copy the `catchPokemon` method that you just wrote above, and paste it below. The time has come to make it so that we cannot catch a Pokemon when we do not have any pokeballs to catch it with. 

Modify the method so that if there are no pokeballs a message will be displayed that there are not enough pokeballs to catch the desired Pokemon.

Also, ensure that the Pokemon isn't added to the `game.party` or the `game.collection`.

Solve Exercise 19 here:
*/
game.catchPokemon = function(pokemonObj){
  if(game.items[1].quantity < 1){
    const x = pokemon[pokemonObj].name
    console.log(`There are not enough pokeballs to catch ${x}`)
  } else{
  if(game.party.length > 5){
    console.log(`You had too many pokemon if your party so ${game.party[(game.party.length-1)].name} was sent to a farm up north`)
    game.party.pop()
    game.party.push(pokemon[pokemonObj])
    game.items[1].quantity--
  } else {
  game.party.push(pokemon[pokemonObj])
  game.items[1].quantity--
  }
  console.log(game.items)
  }
} 
 //Testing our work
//console.log(game.party)
game.catchPokemon(78)
//console.log(game.party)
game.catchPokemon(97)
//console.log(game.party)
game.catchPokemon(134)
game.catchPokemon(136)
console.log(pokemon[139].name)
game.catchPokemon(139)
console.log(pokemon[147].name)
game.catchPokemon(147)


//We will do 20 and 21 on Monday morning
/*
Exercise 20
Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify is so that you can just pass in the name of a Pokemon instead 
of an entire object, and the method will look up the Pokemon from the data set for you.

The string passed in should be allowed to be any case (for example, if the string 'PiKacHU' 
is passed to the function, it should match to 'Pikachu' in the data set). 

If there is not a match, then return a string noting that the selected Pokemon does not exist. Ensure you do not decrement the pokeball count 
if an invalid Pokemon name is passed in, and also ensure that the Pokemon isn't added to the `game.party` or the `game.collection`.

Solve Exercise 20 here:
*/

/*
Exercise 21
Dynamically construct an object with the existing `pokemon` data sorted by the different pokemon types. The object will have this structure:

{
  grass: [
    { number: 1, name: 'Bulbasaur', type: 'grass', hp: 45, starter: true },
    { number: 2, name: 'Ivysaur', type: 'grass', hp: 60, starter: false },
    { number: 3, name: 'Venusaur', type: 'grass', hp: 80, starter: false },
    * more grass type Pokemon objects...
  ],
  fire: [
    { number: 4, name: 'Charmander', type: 'fire', hp: 39, starter: true },
    * more fire type Pokemon objects...
  ],
  water: [
    * water type Pokemon objects...
  ],
  * etc... until there is an array for every Pokemon type!
}

Log the object when it's constructed.

Solve Exercise 21 here:
*/


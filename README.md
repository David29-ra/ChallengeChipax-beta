# Rick and Morty Challenge

It is a challenge to build a program with two exercises.

1. Char counter:
    - how many times does letter **"l"**(case insensitive) apear in the names of all `location`.
    - how many times does letter **"e"**(case insensitive) apear in names of all `episode`.
    - how many times does letter **"c"**(case insensitive) apear in names of all `character`.
    - how long the program 👆 takes to run in total (from start of execution to deliver the results).
2. Episode locations:
    - for each `episode`, list all the `locations`(`origin`) of the `character` who appear (without repetitions) in that `episode`.
    - how long the program 👆 takes to run in total (from start of execution to deliver the results).

## Api

For the exercise I use the appi https://rickandmortyapi.com/ to get data such as:

  + `location` (https://rickandmortyapi.com/api/location/)
  + `episode` (https://rickandmortyapi.com/api/episode/)
  + `character` (https://rickandmortyapi.com/api/character/)

Functions on services directory do the fecth of endpoints above.

  + apifetch contain a Fetch fuction that return a json object and manage error if it happens.

  + indexdata contain a getData function that return a data from the api and set on local storage.

<br/>
<br/>


## to Start

1. Use live serve to open index.html and you can see the result on the browser.
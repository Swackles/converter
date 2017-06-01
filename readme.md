# Number converter

This is a number converter, it convers diffrent types of numbers to arabic.

## Supported converts

* Roman to Arabian
  * For the moment maximum number conversion it supports is 3888.

## Info

#### Roman to Arabian

* ```function RA() ```
  * Starts console.time
  * Takes string from ```class="RAinput"```
  * Writes it to ```var RAvalue;```
  * Start console.group
  * Starts ```function check()```

<br />

* ```function check()```
  * If string is not a number
    * Starts ```function convert()```
    * Logs that string is valid
  * Else
    * Logs that string is invalid
    * Starts ```function end()```...

<br />

* ```function convert()```
  * While loop untill ```i``` is bigger then ```RAvalue.length```
    * If character at ```i``` is character {I, V, X, L, C, D, M}
      * Pushes the corresponding number to an array ```var numbers = [];```
      * Replaces the character in string ```RAvalue```with 0
      * I, X, C, M have other number combiations aswell so depenging if that combination takes 2 letters or 3, the amount will be replaced in string ```RAvalue``` and the corrosponding numbers will be sent to the array

<br />

*

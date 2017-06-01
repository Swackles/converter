# Number converter

This is a number converter, it convers diffrent types of numbers to arabic.

## Supported converts

* Roman to Arabian
  * For the moment maximum number conversion it supports is 3888.

## Info

#### Roman to Arabian

* ```function RA() ```
  * starts console.time
  * takes string from ```class="RAinput"```
  * writes it to ```var RAvalue;```
  * start console.group
  * starts ```function check()```...

* ```function check()```
  * if string is not a number
    * starts ```function convert()```
    * logs that string is valid
  * else
    * logs that string is invalid
    * starts ```function end()```...

* ```function convert()```
  * while loop untill ```i``` is bigger then ```RAvalue.length```
    * if character at ```i``` is character {I, V, X, L, C, D, M}
      * pushes the corresponding number to an array ```var numbers = [];```
      * replaces the character in string ```RAvalue```with 0
    * 

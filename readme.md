# Number converter

This is a number converter, it convers diffrent types of numbers to arabic.

## Supported converts

* Roman to Arabian
  * For the moment maximum number conversion it supports is 3888.

## Info

#### Roman to Arabian

###### Variables

| Name | Location | Use |
| :---: | :---: | :--- |
| RAvalue | RA() | This is HTML input |
| validNum | RAhub | Checks if all inputs characters are valid |
| roman | RAconvert | Contains string which is used to find match to input |
| unique | RAcheck | Used to make sure that strings dosen't contain invalid roman numbers |
| numbers | RAconvert | Pushes the corrosponding number match from string to array and sums it |
| type | returns | If valid is "false" this says the error |
| occurence | returns | Used to count how many times a invalid number was met |
| valid | returns | This says if input is "true"/"false" |
| letter | returns  | This is invalid letter |
| letter1 | returns | This is invalid letter |
| letter2 | returns | This is invalid letter |

<br>

###### Function variables

| Name | From function |
| :---: | :---: |
| check | RAhub |
| valid | RAcheck |
| result | RAconvert |
| pos | RApos |

<br>

###### Errors
| Type | When occures | HTML message
| :---: | :--- | :--- |
| LError | When it meets a invalid letter | Number <letter> does not exist in roman numbers |
| NError | When input string contains numbers |
| CError1 | When too many of characters exists | You can't have number <letter>, <occurence> times |
| CError2 | When 2 numbers exists which can't exist at the same time | You can't have number <letter1> and number <letter2> at the same time. |
| CError3 | When number exists after which another number can't exists over 1 time |You can't have number <letter1> over one time, when number <letter2> exists. |

<br>

* ```javascript function RA() ```
  * This is start function
  * Actions
    * Prints/Takes info to/from HTML
    * makes input upper casse
    * Starts console.time
    * Starts ```javascript function RAhub(RAvalue) ```

<br>

* ```javascript function RAhub(RAvalue) ```
  * This is center of functions
  * Actions
    * checks for numbers
      * If no numbers are met it continues
      * If number is met it returns
    * starts  ```javascript function RAcheck(RAvalue) ```
      * Checks that there aren't too many roman umbers in case
      * If function returns "valid" it continues
      * IF function returns "false" it returns, type: CError
    * starts  ```javascript function RAconvert(RAvalue) ```
      * It converts the roman numbers to arabic numbers and sums it up
      * This function will return the converted number
    * starts  ```javascript function RApos(result.numberArray) ```
      * Checks that numbers are in right order
      * If function returns "valid" it returns
      * IF function returns "false" it returns, type: PosError

var RAvalue;
var numbers = [];


var error = [
  'color: black',
  'font-weight: bold',
  'background-color: red'
]

function RA() {
  console.time();
  RAvalue = document.getElementById('RAinput').value;
  console.group('Roman to arabic, string ('+RAvalue+')');
  check();

}

function check(){

  if (isNaN(RAvalue)) {
    console.log('string ('+RAvalue+') is valid');
    convert();
  }

  else {
    console.error('string ('+RAvalue+') is invalid, contains numbers');
    end();
}}


function convert(){
  while (i = 0; i =< RAvalue.length; i++){
    // I = 1, II = 2, III = 3, IV = 4, IX = 9
    if (RAvalue.charAt(i) == 'I'){
      if (RAvalue.charAt(i++) == 'I'){
        if (RAvalue.charAt(i+2) == 'I'){
          RAvalue.replace(RAvalue.charAT(i), '0');
          RAvalue.replace(RAvalue.charAT(i++), '0');
          RAvalue.replace(RAvalue.charAT(i+2), '0');
          numbers.push('3');
          i = i + 2
        }
        else {
          RAvalue.replace(RAvalue.charAt(i), '0');
          RAvalue.replace(RAvalue.charAT(i++), '0');
          numbers.push('2');
          i = i++;
        }
      }
      else if (RAvalue.charAt(i++) == 'V'){
        RAvalue.replace(RAvalue.charAt(i), '0');
        RAvalue.replace(RAvalue.charAT(i++), '0');
        numbers.push('4');
        i = i++;
      }
      else if (RAvalue.charAt(i++) == 'x'){
        RAvalue.replace(RAvalue.charAt(i), '0');
        RAvalue.replace(RAvalue.charAT(i++), '0');
        numbers.push('9');
        i = i++;
        RAvalue.replace(RAvalue.charAT(i), '0');
        numbers.push('9');
        i = i--;
      }
      else {
        RAvalue.replace(RAvalue.charAt(i), '0');
        numbers.push('1');
      }
    }
    // x = 10, XX = 20, XXX = 30, XL = 40, XC = 90
    if (RAvalue.charAt(i) == 'X'){
      if (RAvalue.charAt(i++) == 'X'){
        if (RAvalue.charAt(i+2) == 'X'){
          RAvalue.replace(RAvalue.charAT(i), '0');
          RAvalue.replace(RAvalue.charAT(i++), '0');
          RAvalue.replace(RAvalue.charAT(i+2), '0');
          numbers.push('30');
          i = i + 2
        }
        else {
          RAvalue.replace(RAvalue.charAt(i), '0');
          RAvalue.replace(RAvalue.charAT(i++), '0');
          numbers.push('20');
          i = i++;
        }

      }
      else if (RAvalue.charAt(i++) == 'L'){
        RAvalue.replace(RAvalue.charAt(i), '0');
        RAvalue.replace(RAvalue.charAT(i++), '0');
        numbers.push('40');
        i = i++;
      }
      else if (RAvalue.charAt(i++) == 'C'){
        RAvalue.replace(RAvalue.charAt(i), '0');
        RAvalue.replace(RAvalue.charAT(i++), '0');
        numbers.push('90');
        i = i++;
      }
      else {
        RAvalue.replace(RAvalue.charAt(i), '0');
        numbers.push('10');
      }
    }
    // C = 100, CC = 200, CCC = 300
    if (RAvalue.charAt(i) == 'X'){
      if (RAvalue.charAt(i++) == 'X'){
        if (RAvalue.charAt(i+2) == 'X'){
          RAvalue.replace(RAvalue.charAT(i), '0');
          RAvalue.replace(RAvalue.charAT(i++), '0');
          RAvalue.replace(RAvalue.charAT(i+2), '0');
          numbers.push('30');
          i = i + 2
        }
        else {
          RAvalue.replace(RAvalue.charAt(i), '0');
          RAvalue.replace(RAvalue.charAT(i++), '0');
          numbers.push('20');
          i = i++;
        }

      }
      else if (RAvalue.charAt(i++) == 'L'){
        RAvalue.replace(RAvalue.charAt(i), '0');
        RAvalue.replace(RAvalue.charAT(i++), '0');
        numbers.push('40');
        i = i++;
      }
      else if (RAvalue.charAt(i++) == 'C'){
        RAvalue.replace(RAvalue.charAt(i), '0');
        RAvalue.replace(RAvalue.charAT(i++), '0');
        numbers.push('90');
        i = i++;
      }
      else {
        RAvalue.replace(RAvalue.charAt(i), '0');
        numbers.push('10');
      }
    }
}

/*
  console.log('array is '+numbers)
//  console.log('answer is '+answer)
  calculation();
}

function calculation() {
  console.log('calc');

  for (i = 0; i < numbers.length; i++) {
    console.log(i);
    if (numbers[i] == numbers[i++]) {
      i = i - 1;
      var double = numbers[i] + numbers[i++];
      i = i - 1;
      numbers2.push(double);
      console.log(i);
    }
    else {
      console.log('returned')
      return(0);
    }

  }
  console.log('array after modifications '+numbers2);
  document.getElementById("answer").innerHTML = answer;
}

function end(reason){
  numbers.length = 0;
  numbers2.length = 0;
  console.timeEnd();
  console.groupEnd();
}

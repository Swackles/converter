var RAvalue;
var numbers = [];
var roman = 'IVXLCDM'

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
    end('contains numbers');
  }
}

function convert(){
  for (var i = 0; i < RAvalue.length; i++){
    console.log('test');
    // I = 1, II = 2, III = 3, IV = 4, IX = 9
    if (RAvalue.charAt(i) == roman.charAt(0)){
      console.log(roman.charAt(0));
      if (RAvalue.charAt(i+1) == roman.charAt(0)){
        console.log(i);
        if (RAvalue.charAt(i+2) == roman.charAt(0)){
          RAvalue.replace(RAvalue.charAt(i), '0');
          RAvalue.replace(RAvalue.charAt(i++), '0');
          RAvalue.replace(RAvalue.charAt(i+2), '0');
          numbers.push('3');
          i = i + 2
        }
        else {
          RAvalue.replace(RAvalue.charAt(i), '0');
          RAvalue.replace(RAvalue.charAt(i++), '0');
          numbers.push('2');
          i = i++;
        }
      }
      else if (RAvalue.charAt(i++) == roman.charAt(1)){
        console.log('4')
        RAvalue.replace(RAvalue.charAt(i), '0');
        RAvalue.replace(RAvalue.charAt(i++), '0');
        numbers.push('4');
        i = i++;
      }
      else if (RAvalue.charAt(i++) == roman.charAt(2)){
        RAvalue.replace(RAvalue.charAt(i), '0');
        RAvalue.replace(RAvalue.charAt(i++), '0');
        numbers.push('9');
        i = i++;
      }
      else {
        console.log('else');
        RAvalue.replace(RAvalue.charAt(i), '0');
        numbers.push('1');
      }
    }
    // x = 10, XX = 20, XXX = 30, XL = 40, XC = 90
    if (RAvalue.charAt(i) == roman.charAt(2)){
      if (RAvalue.charAt(i++) == roman.charAt(2)){
        if (RAvalue.charAt(i+2) == roman.charAt(2)){
          RAvalue.replace(RAvalue.charAt(i), '0');
          RAvalue.replace(RAvalue.charAt(i++), '0');
          RAvalue.replace(RAvalue.charAt(i+2), '0');
          numbers.push('30');
          i = i + 2
        }
        else {
          RAvalue.replace(RAvalue.charAt(i), '0');
          RAvalue.replace(RAvalue.charAt(i++), '0');
          numbers.push('20');
          i = i++;
        }

      }
      else if (RAvalue.charAt(i++) == roman.charAt(3)){
        RAvalue.replace(RAvalue.charAt(i), '0');
        RAvalue.replace(RAvalue.charAt(i++), '0');
        numbers.push('40');
        i = i++;
      }
      else if (RAvalue.charAt(i++) == roman.charAt(4)){
        RAvalue.replace(RAvalue.charAt(i), '0');
        RAvalue.replace(RAvalue.charAt(i++), '0');
        numbers.push('90');
        i = i++;
      }

      RAvalue.replace(RAvalue.charAt(i), '0');
      numbers.push('10');
    }
    // C = 100, CC = 200, CCC = 300
    if (RAvalue.charAt(i) == roman.charAt(4)){
      if (RAvalue.charAt(i++) == roman.charAt(4)){
        if (RAvalue.charAt(i+2) == roman.charAt(4)){
          RAvalue.replace(RAvalue.charAt(i), '0');
          RAvalue.replace(RAvalue.charAt(i++), '0');
          RAvalue.replace(RAvalue.charAt(i+2), '0');
          numbers.push('300');
          i = i + 2
        }
        else {
          RAvalue.replace(RAvalue.charAt(i), '0');
          RAvalue.replace(RAvalue.charAt(i++), '0');
          numbers.push('200');
          i = i++;
        }
      }
      else if (RAvalue.charAt(i++) == roman.charAt(5)){
        RAvalue.replace(RAvalue.charAt(i), '0');
        RAvalue.replace(RAvalue.charAt(i++), '0');
        numbers.push('400');
        i = i++;
      }
      else if (RAvalue.charAt(i++) == roman.charAt(6)){
        RAvalue.replace(RAvalue.charAt(i), '0');
        RAvalue.replace(RAvalue.charAt(i++), '0');
        numbers.push('900');
        i = i++;
      }

      RAvalue.replace(RAvalue.charAt(i), '0');
      numbers.push('100');
    }
    // M = 1000, MM = 2000, MMM = 3000
    if (RAvalue.charAt(i) == roman.charAt(6)) {
      if (RAvalue.charAt(i++) == roman.charAt(6)) {
        if (RAvalue.charAt(i+2) == roman.charAt(6)) {
          RAvalue.replace(RAvalue.charAt(i), '0');
          RAvalue.replace(RAvalue.charAt(i++), '0');
          RAvalue.replace(RAvalue.charAt(i+2), '0');
          numbers.push('3000');
          i = i + 3;
        }

        RAvalue.replace(RAvalue.charAt(i), '0');
        RAvalue.replace(RAvalue.charAt(i++), '0');
        numbers.push('2000')
        i = i++;
      }

      RAvalue.replace(RAvalue.charAt(i), '0');
      numbers.push('1000');
    }
    // V = 5
    if (RAvalue.charAt(i) == roman.charAt(1)) {
      RAvalue.replace(RAvalue.charAt(i), '0');
      numbers.push('5');
    }
    // L = 50
    if (RAvalue.charAt(i) == roman.charAt(3)) {
      RAvalue.replace(RAvalue.charAt(i), '0');
      numbers.push('50');
    }
    // D = 500
    if (RAvalue.charAt(i) == roman.charAt(5)) {
      RAvalue.replace(RAvalue.charAt(i), '0');
      numbers.push('500');
    }
  }

    console.log('array is '+numbers);
    console.log('answer is '+RAvalue);
}


/*

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

*/
function end(reason){
  console.error('string '+RAvalue+' is invalid, '+reason);
  numbers.length = 0;
  console.timeEnd();
  console.groupEnd();
}

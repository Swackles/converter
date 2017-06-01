var RAvalue;
var sol;
var x;
var numbers = [];
var answer;
var numbers2 = [];

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

function multple(){
  for (i = 0; i < RAvalue.length; i++) {
    if (RAvalue.includes(II)){
      RAvalue.replace(RAvalue.charAt())
    }
  }
}

function convert() {
  for (i = 0; i < RAvalue.length; i++) {
    console.log('converting at index '+i);
    if (i >= 1){
      if (sol.charAt(x) == 'I'){
        var sol = sol.replace(sol.charAt(x), '1');
        numbers.push('1');
        x = x + 1;
      }else if (sol.charAt(x) == 'V'){
        var sol = sol.replace(sol.charAt(x), '5');
        numbers.push('5');
        x = x + 1;
      }else if (sol.charAt(x) == 'X'){
        var sol = sol.replace(sol.charAt(x), '10');
        numbers.push('10');
        x = x + 2;
      }else if (sol.charAt(x) == 'L'){
        var sol = sol.replace(sol.charAt(x), '50');
        numbers.push('50');
        x = x + 2;
      }else if (sol.charAt(x) == 'C'){
        var sol = sol.replace(sol.charAt(x), '100');
        numbers.push('100');
        x = x + 3;
      }else if (sol.charAt(x) == 'D'){
        var sol = sol.replace(sol.charAt(x), '500');
        numbers.push('500');
        x = x + 3;
      }else if (sol.charAt(x) == 'M'){
        var sol = sol.replace(sol.charAt(x), '1000');
        numbers.push('1000');
        x = x + 4;
      }else {
        console.error('charachter at position '+i+' is invalid');
        end();
      }
    }

    else{
      x = i;
      if (RAvalue.charAt(i) == 'I'){
        var sol = RAvalue.replace(RAvalue.charAt(i), '1');
        numbers.push('1');
        x = x + 1;
      }else if (RAvalue.charAt(i) == 'V'){
        var sol = RAvalue.replace(RAvalue.charAt(i), '5');
        numbers.push('5');
        x = x + 1;
      }else if (RAvalue.charAt(i) == 'X'){
        var sol = RAvalue.replace(RAvalue.charAt(i), '10');
        numbers.push('10');
        x = x + 2;
      }else if (RAvalue.charAt(i) == 'L'){
        var sol = RAvalue.replace(RAvalue.charAt(i), '50');
        numbers.push('50');
        x = x + 2;
      }else if (RAvalue.charAt(i) == 'C'){
        var sol = RAvalue.replace(RAvalue.charAt(i), '100');
        numbers.push('100');
        x = x + 3;
      }else if (RAvalue.charAt(i) == 'D'){
        var sol = RAvalue.replace(RAvalue.charAt(i), '500');
        numbers.push('500');
        x = x + 3;
      }else if (RAvalue.charAt(i) == 'M'){
        var sol = RAvalue.replace(RAvalue.charAt(i), '1000');
        numbers.push('1000');
        x = x + 4;
      }else {
        console.error('charachter at position '+i+' is invalid');
        end();
      }
    }
  }
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

function end(){
  numbers.length = 0;
  numbers2.length = 0;
  console.timeEnd();
  console.groupEnd();
}

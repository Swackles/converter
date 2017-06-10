var roman = 'IVXLCDM';


function RA() {
  console.time();
  var  RAvalue = document.getElementById('RAinput').value;
  console.group('Roman to arabic, string ('+RAvalue+')');
  var func = check(RAvalue);
  console.log(func);
  var result = func.result;
  var RAvalue = func.RAvalue;
  var type = func.type;

  var p = document.createElement('p1');
  var br = document.createElement('br');
  var log = document.getElementById("log");

  if (type == "answer"){
    var text = document.createTextNode("Answer to your roman number "+RAvalue+" is "+result);

    p.appendChild(text);
    p.className = type;
    log.insertBefore(p, log.childNodes[0]);
    log.insertBefore(br, log.childNodes[1]);

  }
  else if (type == 'error') {
    var text = document.createTextNode("Your roman number ("+RAvalue+") is incorrect and can't be converted");

    p.appendChild(text);
    p.className = type;
    log.insertBefore(p, log.childNodes[0]);
    dlog.insertBefore(br, log.childNodes[1]);
  }
  else {
    console.error('log txt error, type = '+type+', result = '+result+', RAvalue = '+RAvalue);

    var text = document.createTextNode("Your converted number message was not able to send");

    p.appendChild(text);
    p.className = "error";
    log.insertBefore(p, log.childNodes[0]);
    log.insertBefore(br, log.childNodes[1]);
  }
}

function check(RAvalue){

  if (isNaN(RAvalue)) {
    console.log('string ('+RAvalue+') is valid');
    var result = convert(RAvalue);
    return { result: result, type: "answer", RAvalue: RAvalue};
  }

  else {
    console.error("Your input is a number");

    var p = document.createElement('p1');
    var br = document.createElement('br');
    var text = document.createTextNode("Your input is a number");
    var log = document.getElementById("log")

    p.appendChild(text);
    p.className = "error";
    log.insertBefore(p, log.childNodes[0]);
    log.insertBefore(br, log.childNodes[1]);

    console.timeEnd();
    console.groupEnd();
  }
}

function convert(RAvalue){
  RAvalue = RAvalue.toUpperCase();
  var numbers = [];

  for (var i = 0; i <= RAvalue.length; i++){
    // I = 1, II = 2, III = 3, IV = 4, IX = 9
    if (RAvalue.charAt(i) == roman.charAt(0)){
      if (RAvalue.charAt(i+1) == roman.charAt(0)){
        if (RAvalue.charAt(i+2) == roman.charAt(0)){
          RAvalue = RAvalue.replace('I', '0');
          RAvalue = RAvalue.replace('I', '0');
          RAvalue = RAvalue.replace('I', '0');
          numbers.push(3);
          i = i + 2
        }
        else {
          RAvalue = RAvalue.replace('I', '0');
          RAvalue = RAvalue.replace('I', '0');
          numbers.push(2);
          i = i++;
        }
      }
      else if (RAvalue.charAt(i+1) == roman.charAt(1)){
        RAvalue = RAvalue.replace('I', '0');
        RAvalue = RAvalue.replace('V', '0');
        numbers.push(4);
        i = i++;
      }
      else if (RAvalue.charAt(i+1) == roman.charAt(2)){
        RAvalue = RAvalue.replace('I', '0');
        RAvalue = RAvalue.replace('X', '0');
        numbers.push(9);
        i = i++;
      }
      else {
        RAvalue = RAvalue.replace('I', '0');
        numbers.push(1);
      }
    }
    // x = 10, XX = 20, XXX = 30, XL = 40, XC = 90
    if (RAvalue.charAt(i) == roman.charAt(2)){
      if (RAvalue.charAt(i+1) == roman.charAt(2)){
        if (RAvalue.charAt(i+2) == roman.charAt(2)){
          RAvalue = RAvalue.replace('X', '0');
          RAvalue = RAvalue.replace('X', '0');
          RAvalue = RAvalue.replace('X', '0');
          numbers.push(30);
          i = i + 2
        }
        else {
          RAvalue = RAvalue.replace('X', '0');
          RAvalue = RAvalue.replace('X', '0');
          numbers.push(20);
          i = i++;
        }
      }
      else if (RAvalue.charAt(i+1) == roman.charAt(3)){
        RAvalue = RAvalue.replace('X', '0');
        RAvalue = RAvalue.replace('L', '0');
        numbers.push(40);
        i = i++;
      }
      else if (RAvalue.charAt(i+1) == roman.charAt(4)){
        RAvalue = RAvalue.replace('X', '0');
        RAvalue = RAvalue.replace('C', '0');
        numbers.push(90);
        i = i++;
      }
      else {
        RAvalue = RAvalue.replace('X', '0');
        numbers.push(10);
      }
    }
    // C = 100, CC = 200, CCC = 300 CD = 400, CM = 900
    if (RAvalue.charAt(i) == roman.charAt(4)){
      if (RAvalue.charAt(i+1) == roman.charAt(4)){
        if (RAvalue.charAt(i+2) == roman.charAt(4)){
          RAvalue = RAvalue.replace('C', '0');
          RAvalue = RAvalue.replace('C', '0');
          RAvalue = RAvalue.replace('C', '0');
          numbers.push(300);
          i = i + 2
        }
        else {
          RAvalue.replace('C', '0');
          RAvalue.replace('C', '0');
          numbers.push(200);
          i = i++;
        }
      }
      else if (RAvalue.charAt(i+1) == roman.charAt(5)){
        RAvalue = RAvalue.replace('C', '0');
        RAvalue = RAvalue.replace('D', '0');
        numbers.push(400);
        i = i++;
      }
      else if (RAvalue.charAt(i+1) == roman.charAt(6)){
        RAvalue = RAvalue.replace('C', '0');
        RAvalue = RAvalue.replace('M', '0');
        numbers.push(900);
        i = i++;
      }
      else{
        RAvalue = RAvalue.replace('C', '0');
        numbers.push(100);
      }
    }
    // M = 1000, MM = 2000, MMM = 3000
    if (RAvalue.charAt(i) == roman.charAt(6)) {
      if (RAvalue.charAt(i+1) == roman.charAt(6)) {
        if (RAvalue.charAt(i+2) == roman.charAt(6)) {
          RAvalue = RAvalue.replace('M', '0');
          RAvalue = RAvalue.replace('M', '0');
          RAvalue = RAvalue.replace('M', '0');
          numbers.push(3000);
          i = i + 3;
        }
        else {
          RAvalue = RAvalue.replace('M', '0');
          RAvalue = RAvalue.replace('M', '0');
          numbers.push(2000)
          i = i++;
        }
      }
      else {
        RAvalue = RAvalue.replace('M', '0');
        numbers.push(1000);
      }
    }
    // V = 5
    if (RAvalue.charAt(i) == roman.charAt(1)) {
      RAvalue = RAvalue.replace('V', '0');
      numbers.push(5);
    }
    // L = 50
    if (RAvalue.charAt(i) == roman.charAt(3)) {
      RAvalue = RAvalue.replace('L', '0');
      numbers.push(50);
    }
    // D = 500
    if (RAvalue.charAt(i) == roman.charAt(5)) {
      RAvalue = RAvalue.replace('D', '0');
      numbers.push(500);
    }
  }

    console.log('array is '+numbers);
    console.log('answer is '+RAvalue);
    console.timeEnd();
    console.groupEnd();
    return numbers.reduce( function(prev, cur) { return prev + cur; } );
}

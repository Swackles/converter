function RA() {
  console.time();
  var  RAvalue = document.getElementById('RAinput').value;
  var RAvalue =  RAvalue.toUpperCase();
  console.group('Roman to arabic, string ('+RAvalue+')');
  var check = RAhub(RAvalue);
  //type: valid.type, occurence: valid.occurence, letter1: valid.letter1, letter2: valid.letter2, valid: valid.valid

  var p = document.createElement('p1');
  var br = document.createElement('br');
  var log = document.getElementById("log");
  if (check.valid == "true"){
    var text = document.createTextNode("Answer to your roman number "+check.RAvalue+" is "+check.result);

    p.appendChild(text);
    p.className = check.type;
    log.insertBefore(p, log.childNodes[0]);
    log.insertBefore(br, log.childNodes[1]);

    console.timeEnd();
    console.groupEnd();

  }
  else if (check.valid == 'false') {
    if (check.type == "LError"){
      var text = document.createTextNode("Your input has "+check.occurence+" characters that do not match roman numbers");

      p.appendChild(text);
      p.className = check.type;
      log.insertBefore(p, log.childNodes[0]);
      log.insertBefore(br, log.childNodes[1]);

      console.timeEnd();
      console.groupEnd();
    }
    if (check.type == "NError"){
      var text = document.createTextNode("Answer to your roman number "+check.RAvalue+" is "+check.result);

      p.appendChild(text);
      p.className = check.type;
      log.insertBefore(p, log.childNodes[0]);
      log.insertBefore(br, log.childNodes[1]);

      console.timeEnd();
      console.groupEnd();
    }
    if (check.type == "CError1" ){
      var text = document.createTextNode("You can't have number " +check.letter+ ", " +check.occurence+ " times.");

      p.appendChild(text);
      p.className = check.type;
      log.insertBefore(p, log.childNodes[0]);
      log.insertBefore(br, log.childNodes[1]);

      console.timeEnd();
      console.groupEnd();
    }
    if (check.type == "CError2" ){
      var text = document.createTextNode("You can't have number " +check.letter1+ " and number " +check.letter2+ " at the same time.");

      p.appendChild(text);
      p.className = check.type;
      log.insertBefore(p, log.childNodes[0]);
      log.insertBefore(br, log.childNodes[1]);

      console.timeEnd();
      console.groupEnd();
    }
    if (check.type == "CError3" ){
      var text = document.createTextNode("You can't have number " +check.letter1+ " over one time, when number " +check.letter2+ " exists.");

      p.appendChild(text);
      p.className = check.type;
      log.insertBefore(p, log.childNodes[0]);
      log.insertBefore(br, log.childNodes[1]);

      console.timeEnd();
      console.groupEnd();
    }
  }
}

function RAhub(RAvalue){
  if (isNaN(RAvalue)) {
    var valid = RAcheck(RAvalue);
    if (valid.valid == "true"){
      var result = RAconvert(RAvalue);
      if (result.valid == "true"){
        var pos = RApos(result.numberArray);
        if (pos.valid == "true") {
          return { result: result.result, valid: pos.valid, RAvalue: RAvalue};
        }
        else if (pos.valid == "false") {
          return { type: pos.type, valid: pos.valid}
        }
      }
      else if (result.valid == "false") {
        return { type: result.type, occurence: result.occurence, valid: result.valid}
      }
    }
    else if (valid.valid == "false") {
      return {type: valid.type, occurence: valid.occurence, letter: valid.letter, letter1: valid.letter1, letter2: valid.letter2, valid: valid.valid}
    }
  }
  else {
    return {type: "NError", valid: "false"}
  }
}

function RAcheck(RAvalue) {
  var unique = ["IV", "IX", "XL", "XC", "CD", "CM"];
  if (RAvalue.match(/IV/g) != "null"){
    var i = (RAvalue.match(/IV/g) || []).length;
    if (i > 1) {
      return { type: "CError1", letter: "IV", occurence: i, valid: "false"}
    }
    else if (i == 1) {
      var i = (RAvalue.match(/I/g) || []).length;
      if (i == 1){
        if (RAvalue.match(/IX/g) == "null"){
          unique.delete[0];
        }
        else if (RAvalue.match(/IX/g) == "null"){
          return { type: "CError2", letter1: "IV", letter2: "IX", valid: "false"}
        }
      }
      else if (i > 1) {
        return { type: "CError3", letter1: "I", letter2: "IV", valid: "false"}
      }
    }
  }
  if (RAvalue.match(/IX/g) != "null"){
    var i = (RAvalue.match(/IX/g) || []).length;
    if (i > 1) {
      return { type: "CError1", letter: "IX", occurence: i, valid: "false"}
    }
    else if (i == 1) {
      var i = (RAvalue.match(/I/g) || []).length;
      if (i == 1){
        unique.delete[1];
      }
      else if (i > 1) {
        return { type: "CError3", letter1: "I", letter2: "IX", valid: "false"}
      }
    }
  }
  if (RAvalue.match(/XL/g) != "null"){
    var i = (RAvalue.match(/XL/g) || []).length;
    if (i > 1) {
      return { type: "CError1", letter: "XL", occurence: i, valid: "false"}
    }
    else if (i == 1) {
      var i = (RAvalue.match(/X/g) || []).length;
      if (i == 1){
        if (RAvalue.match(/XC/g) == "null"){
          unique.delete[2];
        }
        else if (RAvalue.match(/XC/g) = "null"){
          return { type: "CError2", letter1: "IXLV", letter2: "XC", valid: "false"}
        }
      }
      else if (i > 1) {
        return { type: "CError3", letter1: "X", letter2: "XL", valid: "false"}
      }
    }
  }
  if (RAvalue.match(/XC/g) != "null"){
    var i = (RAvalue.match(/XC/g) || []).length;
    if (i > 1) {
      return { type: "CError1", letter: "XC", occurence: i, valid: "false"}
    }
    else if (i == 1) {
      var i = (RAvalue.match(/X/g) || []).length;
      if (i == 1){
        unique.delete[1];
      }
      else if (i > 1) {
        return { type: "CError3", letter1: "X", letter2: "XC", valid: "false"}
      }
    }
  }
  if (RAvalue.match(/CD/g) != "null"){
    var i = (RAvalue.match(/CD/g) || []).length;
    if (i > 1) {
      return { type: "CError1", letter: "CD", occurence: i, valid: "false"}
    }
    else if (i == 1) {
      var i = (RAvalue.match(/C/g) || []).length;
      if (i == 1){
        if (RAvalue.match(/CM/g) == "null"){
          unique.delete[2];
        }
        else if (RAvalue.match(/CM/g) == "null"){
          return { type: "CError2", letter1: "IXLV", letter2: "CM", valid: "false"}
        }
      }
      else if (i > 1) {
        return { type: "CError3", letter1: "C", letter2: "CD", valid: "false"}
      }
    }
  }
  if (RAvalue.match(/XC/g) != "null"){
    var i = (RAvalue.match(/CM/g) || []).length;
    if (i > 1) {
      return { type: "CError1", letter: "CM", occurence: i, valid: "false"}
    }
    else if (i == 1) {
      var i = (RAvalue.match(/C/g) || []).length;
      if (i == 1){
        unique.delete[1];
      }
      else if (i > 1) {
        return { type: "CError3", letter1: "C", letter2: "CM", valid: "false"}
      }
    }
  }
  if (RAvalue.match(/M/g) != "null"){
    var i = (RAvalue.match(/M/g) || []).length;
    if (i > 3){
      console.log("M");
      return { type: "CError1", letter: "M", occurence: i, valid: "false"}
    }
  }

  if (unique.includes("IV") && unique.includes("IX")){
    var i = (RAvalue.match(/I/g) || []).length;
    if (i > 3){
      return { type: "CError1", letter: "I", occurence: i, valid: "false"}
    }
  }
  if (unique.includes("XL") && unique.includes("XC")){
    var i = (RAvalue.match(/X/g) || []).length;
    if (i > 3){
      return { type: "CError1", letter: "X", occurence: i, valid: "false"}
    }
  }
  if (unique.includes("CD") && unique.includes("CM")){
    var i = (RAvalue.match(/C/g) || []).length;
    if (i > 3){
      return { type: "CError1", letter: "C", occurence: i, valid: "false"}
    }
  }
  return {valid: "true"};
}

function RAconvert(RAvalue){
  RAvalue = RAvalue.toUpperCase();
  var roman = 'IVXLCDM';
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
          i = i + 2;
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
          i = i + 2;
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
          numbers.push(2000);
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
    if ((RAvalue.match(/0/g) || []).length != RAvalue.length) {
      console.log("stuff");
      return { type: "LError", occurence: RAvalue.length - (RAvalue.match(/0/g) || []).length, valid: "false"}
    }
  return { result: numbers.reduce( function(prev, cur) { return prev + cur; } ), numberArray: numbers, valid: "true" }
  }
}

function RApos(numbers) {
  for (i = 0; i > numbers.length; i++) {
    if (numbers[i] < numbers[i+1]) {
      return {type: "PosError", valid: "false"};
    }
  }
    return {valid: "true"};
}

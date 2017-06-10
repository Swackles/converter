(function() {
  for (var i = 0;i < arguments.length;i+=2) {
    var value = convert(arguments[i]);
    if (value != arguments[i+1]) {
      console.error(arguments[i] + "!=" + arguments[i+1] + "(" + value + ")");
    }
  }
})(
  "X", 10, "V", 10, "xx", 15
);

function forLoop(array) {
    for (var i = 0; i < 25; i++) {
        array.push(`"I am " + i + " strange loop${i === 1 ? '' : 's'}."`);
    }
    return array;
}

function whileLoop(x){
  while (x > 0) {
    console.log(--x);
}
return "done"
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array){
  do {
    array.pop()
  } while (array.length > 0 || maybeTrue());
  return array
}

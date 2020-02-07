var array = [];
//array.length = 25;

function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    if(i === 0)
       array[i] = `I am ${i+1} strange loop.``;
    else {
    array[i] = `I am ${i} strange loop${i === 0 ? '' : 's'}.`;
    }
  }
  return array;
}

//var array = [];
//array.length = 25;

function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    //array[i] = `I am ${i} strange loop${i === 0 ? '' : 's'}.`;
    if(i === 1 || i === 0)
      array[i] = `I am 1 strange loop.`;
    else
      array[i] = `I am ${i} strange loops.`;
  }
  return array;
}

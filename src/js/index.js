const arr = [23, 44, 12];

let myfunc = a => {
  console.log(`too : ${a}`);
};

const arr2 = [...arr, 44, 1223];

myfunc(arr2[1]);

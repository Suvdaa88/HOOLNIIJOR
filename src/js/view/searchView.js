var superAdd = (a, b) => {
  return a + b + 1000;
};

export const add = (a, b) => superAdd(a, b);
export let multiply = (a, b) => a * b;
export const id = 25;

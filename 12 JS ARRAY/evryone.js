

number = [10, 20, 30, 40, 50, 60];

console.log(
  number.every((num) => {
    return num > 5;
  })
);

console.log(
  number.every((num) => {
    return num > 30;
  })
);
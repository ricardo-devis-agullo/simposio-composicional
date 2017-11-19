const Right = x => ({
  fold: (f, g) => g(x),
  map: fn => Right(fn(x)),
  toString: () => `Right(${x})`,
});

const Left = x => ({
  fold: (f, g) => f(x),
  map: fn => Left(x),
  toString: () => `Left(${x})`,
});

const getColor = name =>
  ({ red: '#ff1122', green: '#22ee11', blue: '#1111ff' }[name]);

const res = getColor('red');

console.log('' + res);

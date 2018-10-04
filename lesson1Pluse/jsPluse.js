var n = 33721;
var sum = 1;
n = ('' + n).split('');
n.forEach(function (e) {
  sum *= e;
});
console.log(`Метод №1 произведение чисел в числе 33721 = ${sum}`);
n.reduce((a, b) => a * b);
console.log(`Метод №2 произведение чисел в числе 33721 = ${sum}`);
var result = 1;
for (var i = 0; i <= 3; i++) {
  result *= sum;
}
console.log(`Результат возведения в стпень 3 = ${result}`);
result = ('' + result).split('');
console.log(`Первое число = ${result[0]}`);
console.log(`Второе число = ${result[1]}`);
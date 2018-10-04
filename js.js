'use strict';

let itemOfExpend1 = prompt('Введите обязательную статью расходов в этом месяце', '');
let cost1 = +prompt('Во сколько обойдется?', 0);
let itemOfExpend2 = prompt('Введите обязательную статью расходов в этом месяце', '');
let cost2 = +prompt('Во сколько обойдется?', 0);

let money,
  time,
  appData = {
    money: 0,
    timeData: 0,
    expenses: {
      itemOfExpend1: cost1,
      itemOfExpend2: cost2
    },
    optionalExpenses: {},
    income: [],
    savings: false
  };

let monthBudget = (cost1 + cost2) / 30;
alert(`Дневной бюджет пользователя = ${monthBudget}`);
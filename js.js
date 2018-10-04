'use strict';

// 2) В файле скрипта создать 2 переменные (money и time), которые будут получать данные от пользователя:
// Первая будет спрашивать "Ваш бюджет на месяц?"
// Вторая "Введите дату в формате YYYY-MM-DD"

let money = +prompt('Ваш бюджет на месяц?', 0);
let time = prompt('Введите дату в формате YYYY-MM-DD', 0);

// 3) Создать объект appData, который будет содержать такие данные:
let appData = {
  // бюджет (передаем сюда переменную из п.2)
  budget: money,
  // данные времени - timeData (передаем сюда переменную из п.2)
  timeData: time,
  // объект с обязательными расходами - expenses (смотри пункт 4)
  expenses: {},
  // объект с необязательными расходами - optionalExpenses (оставляем пока пустым)
  optionalExpenses: {},
  // массив данных с доп. доходом - income (оставляем пока пустым)
  income: [],
  // свойство savings (выставляем его как false)
  savings: false
};

// 4) Задать пользователю по 2 раза вопросы:
//“Введите обязательную статью расходов в этом месяце”
//“Во сколько обойдется?”
//Записать ответы в объект expenses в формате:

let expensesItem1 = prompt('Введите обязательную статью расходов в этом месяце', '');
let expensescCost1 = +prompt('Во сколько обойдется?', 0);
let expensesItem2 = prompt('Введите обязательную статью расходов в этом месяце', '');
let expensescCost2 = +prompt('Во сколько обойдется?', 0);

appData.expenses = {
  [expensesItem1]: expensescCost1,
  [expensesItem2]: expensescCost2,
};

console.log(appData);

let dayBudget = (expensescCost1 + expensescCost2) / 30;
alert(`Дневной бюджет пользователя = ${dayBudget}`);
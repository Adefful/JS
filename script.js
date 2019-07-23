let money;
let time;

money = +prompt("Ваш Бюджет на месяц?", "");
time = prompt("Введите дату в формате YYYY-MM-DD", "2019-");


let appData = {
    budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};

appData.money = money;
appData.time = time;



for (let i=0; i<2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце","");
    let b = prompt("Во сколько обойдется?","");
    if(typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a != '' && a != '' && a.length < 50) {
            appData.expenses[a] = b;
        }
        else {
            console.log("try again");
            i -= 1;
        }
    

}
appData.moneyPerDay = appData.budget/30;
alert("Ежедневный бюджет: " + appData.moneyPerDay);
if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}


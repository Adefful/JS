let money;
let time;

let appData = {
    budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: true
};
appData.money = money;
appData.time = time;

function start() {
    money = +prompt("Ваш Бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "2019-");
    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш Бюджет на месяц?", "");
    }
}

function chooseExpenses () {
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
}

function chooseOptExpenses () {
    for (let i=0; i<3; i++) {
        let a = prompt("Статья необязательных  расходов","");
        //let b = prompt("Во сколько обойдется?","");
        if(typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a != '' && a != '' && a.length < 50) {
                appData.expenses[i] = a;
            }
            else {
                console.log("try again");
                i -= 1;
            }
        
    
    }
}

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget/30).toFixed(1);
    alert("Ежедневный бюджет: " + appData.moneyPerDay); 

}

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }
}


start();
chooseExpenses ();
detectDayBudget();

function checkSavings() {
    if(appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?", ""),
            percent = +prompt("Под какой процент?");
        appData.monthIncome = save/100/12+percent;
        alert("Доход в месяц" + appData.monthIncome);
    }
}
checkSavings();
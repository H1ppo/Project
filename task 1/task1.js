let money = prompt('Ваш бюджет на месяц?', '0');
let time = prompt('Введите дату в формате YYYY-MM-DD', "2000-01-01");
let appData = {
    budget: money,
    timeData: time,
    expenses:'',
    optionalExpenses:'',
    income:'',
    savings: false
};
let quest = prompt('Введите обязательную статью расходов в этом месяце',"");
let ans = prompt('Во сколько обойдется?','0');
appData.expenses = quest + ' : ' + ans + '; ';
quest = prompt('Введите еще обязательную статью расходов в этом месяце',"");
ans = prompt('Во сколько обойдется?','0');
appData.expenses = appData.expenses + quest + ' : ' + ans;
let oneday = 'Ваш бюджет на день: ' + money/30; 
alert(oneday);





let bankAccount = 1000;
const mentalTreshold = 400;
let remainingMoney;
let taxToPay;
let i = 0;


let phonesToBuy = [
    {
        'model': 'aap',
        'price': 200
    },
    {
        'model': 'noot',
        'price': 300
    },
    {
        'model': 'mies',
        'price': 600
    }
];

let phonePrice = phonesToBuy.map(function (purchase, index, purchases) {

    return purchase.price;

});

console.log('phonePrice', phonePrice[i]);

function decideOnAccesoires() {
    if (phonePrice[i] < mentalTreshold) {
        let accesoirePrice = phonePrice[i] + 150;
        return accesoirePrice
    }
    else {
        return phonePrice[i]
    }
}
console.log('accesoires?', decideOnAccesoires());

function calculateTax() {
    if (1 == 1) {
        taxToPay = decideOnAccesoires() * 0.20;
        return taxToPay;
    }
}
console.log('tax', taxToPay);

function checkBankAccount() {
    remainingMoney = bankAccount - taxToPay - decideOnAccesoires();
    console.log('money left', remainingMoney);
    return remainingMoney;
}

while (phonePrice[1] < bankAccount) {
    i ++;
    decideOnAccesoires();
    calculateTax();
    checkBankAccount();
    console.log(i);
    if (remainingMoney >= bankAccount) {
        break;
    }
}

console.log('cahoots');

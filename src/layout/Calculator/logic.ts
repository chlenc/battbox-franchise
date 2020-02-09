// 1) Необходимые вложения = amount * 49900
export const calculateInvestments = (amount: number) => amount < 10 ? 0 : amount * 49900;

//old: 2) Выручка в месяц = amount * 94 * 3.5 * 30
//2) Выручка в месяц = amount * 80 * 30 * (если 10 < amount < 19, то 3, если 20 < amount < 39, то 3.2, если 40 < amount < 75, то 3.3, если 76 < amount < 99, то 3.4, если 100 < amount < 199 то 3.75, если 200 < amount 300, то 4)
export const calculateMonthlyRevenue = (amount: number) => {
    if(amount < 10) return 0
    let k = 0;
    if (10 <= amount && amount <= 19) k = 3;
    if (20 <= amount && amount <= 39) k = 3.2;
    if (40 <= amount && amount <= 75) k = 3.3;
    if (76 <= amount && amount <= 99) k = 3.4;
    if (100 <= amount && amount <= 199) k = 3.75;
    if (200 <= amount && amount <= 300) k = 4;
    return amount * 80 * 30 * k
};

// 3) Прибыль через год = выручка в месяц * 12 - необходимые вложения
export const profitInYear = (amount: number) => amount < 10 ? 0 : calculateMonthlyRevenue(amount) * 12;

// 4) Срок окупаемости = необходимые вложения / выручка в месяц (в месяцах)
export const paybackPeriod = (amount: number) => {
    if(amount < 10) return 0
    const investments = calculateInvestments(amount);
    const monthlyRevenue = calculateMonthlyRevenue(amount);
    return investments > 0 && investments > 0
        ? investments / monthlyRevenue
        : 0;
};


export const ceil = (n: number) => String(Math.ceil(n * 100) / 100)
    .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');

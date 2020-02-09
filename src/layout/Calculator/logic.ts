// 1) Необходимые вложения = amount * 49900
export const calculateInvestments = (amount: number) => amount * 49900;

// 2) Выручка в месяц = amount * 94 * 3.5 * 30
export const calculateMonthlyRevenue = (amount: number) => amount * 94 * 3.5 * 30;

// 3) Прибыль через год = выручка в месяц * 12 - необходимые вложения
export const profitInYear = (amount: number) => calculateMonthlyRevenue(amount) * 12;

// 4) Срок окупаемости = необходимые вложения / выручка в месяц (в месяцах)
export const paybackPeriod = (amount: number) => {
    const investments = calculateInvestments(amount);
    return investments > 0
        ? calculateInvestments(amount) / calculateMonthlyRevenue(amount)
        : 0;
};

export const ceil = (n: number) => String(Math.ceil(n * 100) / 100)
    .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');

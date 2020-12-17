const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

// const makeTransaction = (transaction, onSuccess, onError) => {
//     const delay = randomIntegerFromInterval(200, 500);

//     setTimeout(() => {
//         const canProcess = Math.random() > 0.3;
//         if (canProcess) {
//             onSuccess(transaction.id, delay);
//         } else {
//             onError(transaction.id);
//         }
//     }, delay);
// };

// const logSuccess = (id, time ) => {
//     console.log(`Transaction ${id} processed in ${time}ms`);
// };

// const logError = id => {
//     console.warn(`Error processing transaction ${id}. Please try again later.`);
// };

/*
 * Работает так
 */
// makeTransaction({ id: 70, amount: 150 }, logSuccess, logError);
// makeTransaction({ id: 71, amount: 230 }, logSuccess, logError);
// makeTransaction({ id: 72, amount: 75 }, logSuccess, logError);
// makeTransaction({ id: 73, amount: 100 }, logSuccess, logError);
/*
 * Должно работать так
 */

const logSuccess = ({ id, time }) => {
    console.log(`%c make transaction `, "color: teal; font-size: 25px");
    console.log(`%c Success `, "color: green; font-size: 14px");
    console.log(`Transaction ${id} processed in ${time}ms`);
};

const logError = id => {
    console.log(`%c make transaction `, "color: teal; font-size: 25px");
    console.log(`%c Error `, "color: red; font-size: 14px")
    console.warn(`Error processing transaction ${id}. Please try again later.`);
};
const makeTransaction = (transaction) => {

    return new Promise((resolve, reject) => {
        const delay = randomIntegerFromInterval(200, 500);
        setTimeout(() => {
            const canProcess = Math.random() > 0.3;
            if (canProcess) {
                let res = { id: transaction.id, time: delay }
                resolve(res);
            } else {
                reject(transaction.id);
            }
        }, delay);
    })
};


makeTransaction({ id: 70, amount: 150 })
    .then(logSuccess)
    .catch(logError);

makeTransaction({ id: 71, amount: 230 })
    .then(logSuccess)
    .catch(logError);

makeTransaction({ id: 72, amount: 75 })
    .then(logSuccess)
    .catch(logError);

makeTransaction({ id: 73, amount: 100 })
    .then(logSuccess)
    .catch(logError);
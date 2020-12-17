const users = [
    { name: 'Mango', active: true },
    { name: 'Poly', active: false },
    { name: 'Ajax', active: true },
    { name: 'Lux', active: false },
];

// const toggleUserState = (allUsers, userName, callback) => {
//     const updatedUsers = allUsers.map(user =>
//         user.name === userName ? { ...user, active: !user.active } : user,
//     );

//     callback(updatedUsers);
// };

const logger = updatedUsers => console.table(updatedUsers);

const noUser = name => console.log(`There is no user ${name}`);

/*
 * Сейчас работает так
 */
// toggleUserState(users, 'Mango', logger);
// toggleUserState(users, 'Lux', logger);

const toggleUserState = (allUsers, userName) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`%c Toggle user state`, 'color: green; font-size: 25px');
            const isUserExist = allUsers
                .map(user => user.name)
                .find(name => userName === name);
            if (!isUserExist) {
                reject(userName);
            }
            const updatedUsers = allUsers.map(user =>
                user.name === userName ? { ...user, active: !user.active } : user,
            );
            resolve(updatedUsers);
        }, 0);
    });
};

/*
 * Должно работать так
 */
toggleUserState(users, 'Mango').then(logger).catch(noUser);
toggleUserState(users, 'Lux').then(logger).catch(noUser);

toggleUserState(users, 'Bob').then(logger).catch(noUser);
toggleUserState(users, 'Jayson').then(logger).catch(noUser);
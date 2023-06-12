// Функции CRUD для взаимодействия с БД
const database = require('./database.js');
const { Op } = require('sequelize');

// синхронизация БД
async function syncDB(options = {}) {
    await database.sequelize.sync(options);
}

// Создание Нового пользователя
async function createUser(name, username, email, password, callback) {
    // Создание новой транзакции
    const transaction = await database.sequelize.transaction();
    try {
        // Создание нового пользователя
        const newUser = database.User.build({
            name,
            username,
            email,
            password,
        });
        // Сохранение пользователя
        await newUser.save({ transaction })
            .then(() => {
                callback({'Message': 'sucsess'});
            })
            .catch(err => {
                return callback(err);
            });
        // Фиксирование транзакции
        await transaction.commit();
    } catch (err) {
        await transaction.rollback();
        throw `${err} => Message: Ошибка при создании нового полльзователя. Откат транзакции...`;
    };
}
// Получение всех пользователей
async function findAllUsers(callback){
    const transaction = await database.sequelize.transaction();
    try{
        const users = await database.User.findAll({
            transaction,
            attributes: { exclude: ['password'] },
            // where: {
            //     id: 10,
            //     name: {
            //         [Op.or]: ['hello', 'default']
            //     }
            // }
        })
        .catch((err) => {
                throw `${err} => Message: Ошибка при получении списка пользователей. Откат транзакции...`;
            });
        await transaction.commit();
        return callback(users);
    }catch(err){
        await transaction.rollback();
        throw `${err} => Message: Ошибка при получении списка пользователей. Откат транзакции...`;
    }
}

const databaseAction = {
    syncDB,
    createUser,
    findAllUsers,
}

module.exports = databaseAction;
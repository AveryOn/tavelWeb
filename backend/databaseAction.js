// Функции CRUD для взаимодействия с БД
const database = require('./database.js');

// Создание Нового пользователя
async function createUser(name, username, email, password, callback) {
    const newUser = database.User.build({
        name,
        username,
        email,
        password,
    });
    await newUser.save()
        .catch(err => {
            return callback(err);
        });
}

// синхронизация БД
async function syncDB(options = {}) {
    await database.sequelize.sync(options);
}


const databaseAction = {
    createUser,
    syncDB
}

module.exports = databaseAction;
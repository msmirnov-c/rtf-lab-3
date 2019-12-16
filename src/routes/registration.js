import express from 'express';
import { promises as fs } from 'fs';
import bcrypt from 'bcryptjs';
const router = express.Router();
const DB_PATH = 'src/workers/fileDB.txt';
const ROUNDS = 10;

router.use(express.json()); 
router.use(express.urlencoded()); 

const uniqueId = (function () {
return (prefix = 0) => {
prefix = Number(prefix) || 0;
return prefix + 1;
}
}());

router.post('/', async (req, res) => {
const { username, password } = req.body;
const databaseDataText = await fs.readFile(DB_PATH, 'utf-8');
const jsonDatabaseData = databaseDataText ? JSON.parse(databaseDataText) : [];
const isLoginBusy = jsonDatabaseData.some(oneUser => oneUser.username === username);

// Если логин занят, выходим в окно
if (isLoginBusy) {
res.send('Login already exists. Take another login.');
return;
}

const maxIdObject = jsonDatabaseData.reduce((a, b) => { return a.id >= b.id ? a : b }, {});
const maxId = maxIdObject.id;

// Шифруем пароль
const hashedPassword = await new Promise((resolve, reject) => {
bcrypt.hash(password, ROUNDS, (err, hash) => {
if (err) {
reject(err);
}
resolve(hash);
});
});

// Создаем пользователя
const usersArray = jsonDatabaseData || [];
const newUser = {
id: maxId ? uniqueId(maxId) : uniqueId(),
username,
password: hashedPassword
}
usersArray.push(newUser);
 
try {
await fs.writeFile(DB_PATH, JSON.stringify(usersArray));
res.send('Seccess! Your login: ' + username);
} catch (err) {
res.send('Oops! Some problems... Seems like: ' + err);
}
});

export default router;
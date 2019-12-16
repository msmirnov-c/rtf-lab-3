import express from 'express';
import { promises as fs } from 'fs';
import bcrypt from 'bcryptjs';
const router = express.Router();
const DB_PATH = 'src/workers/fileDB.txt';

router.use(express.json());
router.use(express.urlencoded());

router.post('/', async (req, res) => {
const { username, password } = req.body;
const databaseDataText = await fs.readFile(DB_PATH, 'utf-8');
const jsonDatabaseData = databaseDataText ? JSON.parse(databaseDataText) : []; // Если файл пустой, тогда делаем пустой массив
const [ userFromDB ] = jsonDatabaseData.filter(user => user.username === username); // Выбираем из всех пользователей нашего с запрошенным логином

if (!userFromDB) { // Если такого пользовтеля нет, то логин не верный
res.send('Incorrect login!');
return;
} 

const passwordsAreEqual = await new Promise((resolve, reject) => { // Проверка паролей (запрошенного чистого и хэшированного из файла)
bcrypt.compare(password, userFromDB.password, (err, res) => {
if (err) {
reject(err);
} 
resolve(res);
});
});

if (!passwordsAreEqual) {
res.send('Incorrect password!');
} else {
res.send('Welcome, ' + username);
}
});

export default router;
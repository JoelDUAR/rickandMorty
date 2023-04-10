const {Router} = require('express')

const {login} = require('../controllers/login');
const {postUser} = require('../controllers/postUser');


const routerLogin = Router()
routerLogin.get("/", login);

routerLogin.post("/", postUser);


module.exports = routerLogin;
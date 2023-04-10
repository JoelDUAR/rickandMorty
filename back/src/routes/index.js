const { Router } = require('express');
const getCharById = require('../controllers/getCharById');
const getCharDetail = require('../controllers/getCharDetail');
const routerFav = require('./favsRouter');
const routerLogin = require('./login')


const router = Router();

router.get("/onsearch/:id", getCharById);
router.get("/detail/:id", getCharDetail);

router.use("/fav", routerFav);
router.use("/login", routerLogin);


module.exports = router;
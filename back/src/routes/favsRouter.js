 const {Router} = require('express');
 const routerFav = Router();
const {postFav} = require('../controllers/postFav');
const {deleteFav} = require('../controllers/deleteFav');
const {getFavs} = require('../controllers/getFavs');

 routerFav.get("/",getFavs);

 routerFav.post("/", postFav);

 routerFav.delete("/:id", deleteFav);


 module.exports = routerFav;

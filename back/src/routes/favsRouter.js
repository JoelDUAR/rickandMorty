 const {Router} = require('express');
 const routerFav = Router();
 let favs = require("../utils/favs.js")

 routerFav.get("/", async (req, res)=>{
  await res.status(200).json(favs);
 });


 routerFav.post("/", (req, res)=>{
    favs.push(req.body);
    res.status(200).json({status: "ok"});
  });
  
 
    routerFav.delete("/:id", (req, res)=>{
      const {id} = req.params;
      favs = favs.filter((char)=>char.id !== id);
      res.status(200).json({status: "ok"});
    });


 module.exports = routerFav;

const {Favorite} = require('../DB_connection');

const postFav = async (req, res) => {
    const {name, origin, status, image, species, gender} = req.body;
    try {
    if(!name || !origin || !status || !image || !species || !gender) res.status(401).send("Faltan datos");
    const [fav, created] = await Favorite.findOrCreate({
        where: {name, origin, status, image, species, gender},
    })
    await console.log(created)
    const characterFavorites = await Favorite.findAll();
    if(characterFavorites) res.status(200).json({characterFavorites})
    } catch (error) {
        res.status(500).json({error: error.message});
    }
    
}

module.exports = {postFav};
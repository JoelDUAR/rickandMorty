const {Favorite} = require('../DB_connection');

const deleteFav = async (req, res) => {
    const { id } = req.params;
    try {
        const characters = await Favorite.findById(id);
        await characters.destroy();
        const characterFavorites = await Favorite.findAll();
        res.status(200).json({characterFavorites})
    } catch (error) {
        res.status(500).json({ error: error.message })
    }

}

module.exports = {deleteFav};
const {User} = require("../DB_connection");

const postUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) return res.status(400).json({ message: "Faltan datos"});
    const [user, created] = await User.findOrCreate({ where: { email, password }})
   res.status(200).json(user)
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {postUser};

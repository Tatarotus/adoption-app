const connection = require("../database/connection");
module.exports = {
  async create(request, response) {
    try {
      const {
        title,
        description,
        city,
        uf,
        address,
        zip,
        phone
      } = request.body;
      await connection("pets").insert({
        title,
        description,
        city,
        uf,
        address,
        zip,
        phone
      });
      return response.status(204).send();
    } catch (err) {
      console.log(err);
    }
  },
  async index(request, response) {
    try {
      const pets = await connection("pets").select("*");
      return response.json(pets);

      return response.status(403).send();
    } catch (err) {
      console.log(err);
    }
  },
  async delete(req, res) {
    try {
      const { id } = req.params;

      const pet = await connection("pets")
        .where("id", id)
        .first()
        .delete();

      /*
      await connection("incidents")
        .where("id", id)
        .delete();
        */
      return res.json({ id: id, deleted: true });
    } catch (err) {
      return res.status(500).send();
    }
  }
};

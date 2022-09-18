const createService = async (model, req, res) => {
  res.send(JSON.stringify(await model.create(req.body)));
};
module.exports = createService;
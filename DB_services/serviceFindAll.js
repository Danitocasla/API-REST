const findAllService = async (model, req, res) => {
  res.send(JSON.stringify(await model.findAll()));
};
module.exports = findAllService;

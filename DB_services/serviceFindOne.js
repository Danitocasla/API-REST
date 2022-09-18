const findOneService = async (model, req, res) => {
  res.send(
    JSON.stringify(await model.findOne({ where: { id: req.params.id } }))
  );
};
module.exports = findOneService;

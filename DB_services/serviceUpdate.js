const updateService = async (model, req, res) => {
  await model.update(req.body, { where: { id: req.params.id } });
};

module.exports = updateService;

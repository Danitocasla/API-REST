const deleteService = async (model, req, res) => {
  await model.destroy({ where: { id: req.params.id } });
};
module.exports = deleteService;

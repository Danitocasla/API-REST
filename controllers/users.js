const { usersModel } = require("../models");
/**
 * Obtener lista de registros
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {
  const data = await usersModel.find({});
  res.send({ data });
};
/**
 * Obtener un registro
 * @param {*} req
 * @param {*} res
 */
const getItem = (req, res) => {};
/**
 * Crear un registro
 * @param {*} req
 * @param {*} res
 */
const createItem = async (req, res) => {
  const { body } = req;
  const data = await usersModel.create(body);
  res.send({ data }); //siempre debe retornar algo
};
/**
 * Actualizar un registro
 * @param {*} req
 * @param {*} res
 */
const updateItem = (req, res) => {};
/**
 * Borrar un registro
 * @param {*} req
 * @param {*} res
 */
const deleteItem = (req, res) => {};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };

const User = require("../models/users");
const handleError = require("../utils/handleError");
const findAllService = require("../DB_services/serviceFindAll");
const findOneService = require("../DB_services/serviceFindOne");
const createService = require("../DB_services/serviceCreate");
const updateService = require("../DB_services/serviceUpdate");
const deleteService = require("../DB_services/serviceDelete");
/**
 * Obtener lista de registros
 * @param {*} req
 * @param {*} res
 */
const getUsers = async (req, res) => {
  try {
    findAllService(User, req, res);
  } catch (error) {
    handleError("*** ERROR_GET_USERS ***", error, req, res);
  }
};
/**
 * Obtener un registro
 * @param {*} req
 * @param {*} res
 */
const getUser = async (req, res) => {
  try {
    findOneService(User, req, res);
  } catch (error) {
    handleError("*** ERROR_GET_USER ***", error, req, res);
  }
};
/**
 * Crear un registro
 * @param {*} req
 * @param {*} res
 */
const createUser = async (req, res) => {
  try {
    createService(User, req, res);
  } catch (error) {
    handleError("*** ERROR_CREATE_USER ***", error, req, res);
  }
};
/**
 * Actualizar un registro
 * @param {*} req
 * @param {*} res
 */
const updateUser = async (req, res) => {
  try {
    updateService(User, req, req);
    res.send("Update ok");
  } catch (error) {
    handleError("*** ERROR_UPDATE_USER ***", error, req, res);
  }
};
/**
 * Borrar un registro
 * @param {*} req
 * @param {*} res
 */
const deleteUser = async (req, res) => {
  deleteService(User, req, res);

  res.send("Delete ok");
};

module.exports = { getUsers, getUser, createUser, updateUser, deleteUser };

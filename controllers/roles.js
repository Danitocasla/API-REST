const Role = require("../models/roles");
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
const getRoles = async (req, res) => {
  try {
    findAllService(Role, req, res);
  } catch (error) {
    handleError("*** ERROR_GET_ROLES ***", error, req, res);
  }
};
/**
 * Obtener un registro
 * @param {*} req
 * @param {*} res
 */
const getRole = async (req, res) => {
  try {
    findOneService(Role, req, res);
  } catch (error) {
    handleError("*** ERROR_GET_ROLE ***", error, req, res);
  }
};
/**
 * Crear un registro
 * @param {*} req
 * @param {*} res
 */
const createRole = async (req, res) => {
  try {
    createService(Role, req, res);
  } catch (error) {
    handleError("*** ERROR_CREATE_ROLE ***", error, req, res);
  }
};
/**
 * Actualizar un registro
 * @param {*} req
 * @param {*} res
 */
const updateRole = async (req, res) => {
  try {
    updateService(Role, req, req);
    res.send("Update ok");
  } catch (error) {
    handleError("*** ERROR_UPDATE_ROLE ***", error, req, res);
  }
};
/**
 * Borrar un registro
 * @param {*} req
 * @param {*} res
 */
const deleteRole = async (req, res) => {
  deleteService(Role, req, res);

  res.send("Delete ok");
};

module.exports = { getRoles, getRole, createRole, updateRole, deleteRole };

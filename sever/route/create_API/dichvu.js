const express = require("express");
const router = express.Router();
const serviceController = require("../../controller/ControllerDichVu");

router
  .route("/")
  .get(serviceController.getAllServices)
  .post(serviceController.createService);

router
  .route("/:id")
  .get(serviceController.getServiceById)
  .put(serviceController.updateService)
  .delete(serviceController.deleteService);

module.exports = router;
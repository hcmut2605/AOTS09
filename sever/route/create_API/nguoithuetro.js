const express = require("express");
const router = express.Router();
const renterController = require("../../controller/ControllerNguoiThue");

router
  .route("/")
  .get(renterController.getAllRenters)
  .post(renterController.createRenter);

router
  .route("/:id")
  .get(renterController.getRenterById)
  .put(renterController.updateRenter)
  .delete(renterController.deleteRenter);

module.exports = router;
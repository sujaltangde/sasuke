const express = require("express");
const {
  createSurplusFood,
  getAllSurplusFood,
  getSurplusFoodById,
} = require("../controllers/addSurplusFoodController");
const router = express.Router();

router.route("/create").post(createSurplusFood);
router.route("/getAll").get(getAllSurplusFood);
router.route("/get/:id").get(getSurplusFoodById);

module.exports = router;

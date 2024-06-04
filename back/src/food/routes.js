const { Router } = require("express");
const router = Router();
const controller = require("./controller");

router.get("/categories", controller.getCategories);
router.post("/", controller.addCategory);
router.delete("/:id", controller.removeCategory);
router.get("/foods", controller.getFoods);
router.get("/foodCategories", controller.getFoodCategories);
router.post("/addFood", controller.addFood);

module.exports = router;

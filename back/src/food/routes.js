const { Router } = require("express");
const router = Router();
const controller = require("./controller");

router.get("/categories", controller.getCategories);
router.post("/", controller.addCategory);
router.delete("/:id", controller.removeCategory);

module.exports = router;

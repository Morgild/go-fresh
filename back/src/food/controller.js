const pool = require("../../db");
const queries = require("./queries");

const getCategories = (req, res) => {
  try {
    pool.query(queries.getCategories, (error, results) => {
      if (error) throw error;
      res.status(200).json({
        data: results.rows,
        message: "successfully gathered all categories",
      });
    });
  } catch (err) {
    res.json(err);
  }
};
const addCategory = (req, res) => {
  const { foodcategory } = req.body;
  try {
    if (
      !foodcategory ||
      typeof foodcategory != "string" ||
      !foodcategory.trim()
    ) {
      return res.status(409).json({ message: "Insert a valid category" });
    }
    pool.query(
      queries.checkCategoryExists,
      [foodcategory.trim()],
      (error, results) => {
        if (results.rows.length) {
          return res.status(409).send({ messgae: "Category already exists" });
        }
        pool.query(
          queries.addCategory,
          [foodcategory.trim()],
          (error, results) => {
            if (error) throw error;
            return res
              .status(201)
              .send({ message: "Category created successfully" });
          }
        );
      }
    );
  } catch (err) {
    res.json(err);
  }
};
const removeCategory = (req, res) => {
  try {
    const id = parseInt(req.params.id);

    pool.query(queries.getCategory, [id], (error, results) => {
      if (!results.rows.length) {
        return res.send("Category not found");
      }
    });
    pool.query(queries.removeCategory, [id], (error, results) => {
      const noCategoryFound = !results.rows.length;
      if (noCategoryFound) {
        return res.send("Category deleted successfully.");
      }
    });
  } catch (err) {
    return res.json(err);
  }
};

const getFoods = (req, res) => {
  try {
    pool.query(queries.getFoods, (error, results) => {
      res
        .status(200)
        .json({ foods: results.rows, message: "Successfully get all foods" });
    });
  } catch (err) {
    res.json(err);
  }
};
const getFoodCategories = (req, res) => {
  try {
    pool.query(queries.getFoodCategories, (error, results) => {
      res.status(200).json(results.rows);
    });
  } catch (err) {
    res.json(err);
  }
};
const addFood = (req, res) => {
  const { foodname, foodcategory, foodingredient, foodprice, foodimg } =
    req.body;

  const isFoodNameValid =
    !foodname || typeof foodname != "string" || !foodname.trim();
  const isFoodCategoryValid =
    !foodcategory || typeof foodcategory != "string" || !foodcategory.trim();

  if (isFoodNameValid || isFoodCategoryValid) {
    return res
      .status(409)
      .json({ message: "Insert valid food name and category." });
  }
  try {
    pool.query(queries.isFoodExist, [foodname.trim()], (error, results) => {
      if (results.rows.length) {
        return res.status(409).json({ message: "Food already exist." });
      } else {
        pool.query(
          queries.addFood,
          [
            foodname.trim(),
            foodcategory.trim(),
            foodingredient,
            foodprice,
            foodimg,
          ],
          (error, results) => {
            if (results.rowCount) {
              return res
                .status(201)
                .send({ message: "Food created successfully." });
            }
          }
        );
      }
    });
  } catch (err) {
    res.json(err);
  }
};

module.exports = {
  getCategories,
  addCategory,
  removeCategory,
  getFoods,
  getFoodCategories,
  addFood,
};

const pool = require("../../db");
const queries = require("./queries");

const getCategories = (req, res) => {
  pool.query(queries.getCategories, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};
const addCategory = (req, res) => {
  const { foodcategory } = req.body;
  pool.query(queries.checkCategoryExists, [foodcategory], (error, results) => {
    if (results.rows.length) {
      res.send("Category already exists");
    }
    pool.query(queries.addCategory, [foodcategory], (error, results) => {
      if (error) throw error;
      res.status(201).send("Category created successfully");
    });
  });
};
const removeCategory = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.removeCategory, [id], (error, results) => {
    const noCategoryFound = !results.rows.length;
    if (noCategoryFound) {
      res.send("Category does not exist in the database");
    }
  });
};

module.exports = {
  getCategories,
  addCategory,
  removeCategory,
};

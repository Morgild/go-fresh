const getCategories = "SELECT * FROM category";
const checkCategoryExists = "SELECT s FROM category s WHERE s.foodcategory=$1";
const addCategory = "INSERT INTO category (foodcategory) VALUES($1)";
const removeCategory = "DELETE FROM category WHERE id=$1";
module.exports = {
  getCategories,
  checkCategoryExists,
  addCategory,
  removeCategory,
};

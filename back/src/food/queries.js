const getCategories = "SELECT * FROM category";
const getCategory = "SELECT * FROM category WHERE id=$1";
const checkCategoryExists = "SELECT s FROM category s WHERE s.foodcategory=$1";
const addCategory = "INSERT INTO category (foodcategory) VALUES($1)";
const removeCategory = "DELETE FROM category WHERE id=$1";
const getFoods = "SELECT * FROM food ORDER BY foodcategory ASC";
const getFoodCategories =
  "SELECT DISTINCT foodcategory from food ORDER BY foodcategory ASC";
const isFoodExist = "SELECT s FROM food s WHERE s.foodname=$1";
const addFood =
  "INSERT INTO food(foodname,foodcategory,foodingredient,foodprice,foodimg) VALUES ($1,$2,$3,$4,$5)";

module.exports = {
  getCategories,
  getCategory,
  checkCategoryExists,
  addCategory,
  removeCategory,
  getFoods,
  getFoodCategories,
  isFoodExist,
  addFood,
};

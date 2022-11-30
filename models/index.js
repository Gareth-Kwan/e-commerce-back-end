// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");
// const { FOREIGNKEYS } = require("sequelize/types/lib/query-types");

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "Category_id",
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "Category_id",
});

// Products belongToMany Tags (through ProductTag)
Tag.belongsToMany(Product, {
  through: "ProductTag",
  foreignKey: "Product_id",
});

// Tags belongToMany Products (through ProductTag)
Product.belongsToMany(Tag, {
  through: "ProductTag",
  foreignKey: "Product_id",
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'id',
  onDelete: 'CASCADE'
})

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'id',
})

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(ProductTag, {
  foreignKey: 'product_id'
})

// Products belongToMany Tags (through ProductTag)
ProductTag.belongsToMany(Tag, {
  foreignKey: 'id'
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

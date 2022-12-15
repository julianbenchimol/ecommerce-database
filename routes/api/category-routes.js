const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
    try {
    const categoryData = await Category.findAll({
      include: [{model: Product}]
    })
    res.status(200).json(categoryData)
  }
  catch(err){
    res.status(500).json(err)
  }
});

router.get('/:id', async (req, res) => {
  try { 
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{model: Product}]
    })
    res.json(categoryData)
  }
  catch(err){
    res.json(err)
  }
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
  .then((category) =>{
    res.json(category)
  })
  .catch((err) => {
    res.json(err)
  })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    {
      category_name: req.body.categoryName
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.delete({
    where: {
      id: req.params.id
    }
  })
});

module.exports = router;

const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include: [{model: Product}]
    })
    res.status(200).json(tagData)
  }
  catch(err){
    res.status(500).json(err)
  }
});

router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{model: Product}]
    })
    res.status(200).json(tagData)
  }
  catch(err){
    res.status(500).json(err)
  }
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body)
  .then((tag) => {
    res.json(tag)
  })
  .catch((err) => {
    res.json(err)
  })
});

router.put('/:id', (req, res) => {
  Tag.update( 
    {
      tag_name: req.body.tagName
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
  .then((updatedTag)=>{
    res.json(updatedTag)
  })
  .catch((err)=>{
    res.json(err)
  })
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
  .then((deletedTag)=>{
    res.json(deletedTag)
  })
  .catch((err)=>{
    res.json(err)
  })
});

module.exports = router;

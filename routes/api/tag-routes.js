const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try{
    const allTagsWithProducts = await Tag.findAll({
      include: [{ model: Product, through: ProductTag, as: 'tag_in_products' }],
    });
    res.status(200).json(allTagsWithProducts);
  }catch(err){
    res.status(500).json(err);
  }
});

router.get('/:id', async(req, res) => {
  try{
    const tagWithProducts = await Tag.findByPk(req.params.id,{
      include: [{ model: Product, through: ProductTag, as: 'tag_in_products' }],
    });
    res.status(200).json(tagWithProducts);
  }catch(err){
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const newTag = await Tag.create(req.body);
    res.status(200).json(newTag);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const tagToUpdate = await Tag.update(req.body, {
      where:{ 
        id: req.params.id,
      },
      });

    if (!tagToUpdate[0]) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }

    res.status(200).json(tagToUpdate);
  } catch (err) {
    res.status(500).json(err);
  }
  // update a tag's name by its `id` value
});

router.delete('/:id', async (req, res) => {
  try {
    const tagToDestroy = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!tagToDestroy) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }

    res.status(200).json(tagToDestroy);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

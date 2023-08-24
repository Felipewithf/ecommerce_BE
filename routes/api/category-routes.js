const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try{
    const allCategoriesData = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(allCategoriesData);
  }catch(err){
    res.status(500).json(err);
  }

});

router.get('/:id', async (req, res) => {
  try{
    const categoryData = await Category.findByPk(req.params.id,{
      include: [{ model: Product }],
    });
    res.status(200).json(categoryData);
  }catch(err){
    res.status(500).json(err);
  }
});

router.post('/',async(req, res) => {
  // create a new category
  try {
    const newCategory = await Category.create(req.body);
    res.status(200).json(newCategory);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async(req, res) => {
  try{
    const categoryToUpdate = await Category.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    if (!categoryToUpdate) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }
    res.status(200).json(categoryToUpdate);
  }catch(err){
    res.status(500).json(err);
  }
});

router.delete('/:id', async(req, res) => {

  try{
    const categoryToDestroy = await Category.destroy({
      where: {
        id: req.params.id
      }
    });
    if (!categoryToDestroy) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }
    res.status(200).json(categoryToDestroy);
  }catch(err){
    res.status(500).json(err);
  }
});

module.exports = router;

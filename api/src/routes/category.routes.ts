import { Router } from 'express';

import { getRepository } from 'typeorm';
import CreateCategoryService from '../services/CreateCategoryService';
import Category from '../models/categorys/category.entity';

const categoryRouter = Router();

categoryRouter.post('/', async (request, response) => {
  const {
    CategoryName,
    Description,
    ParentId,
    Status,
    CategoryImage,
  } = request.body;

  try {
    const createCategory = new CreateCategoryService();
    const category = await createCategory.execute({
      CategoryName,
      Description,
      ParentId,
      Status,
      CategoryImage,
    });
    return response.json(category);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

categoryRouter.get('/', async (request, response) => {
  const categoryRepository = getRepository(Category);
  try {
    const categorys = await categoryRepository.find();
    return response.json({ categorys });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

categoryRouter.get('/:id', async (request, response) => {
  const categoryRepository = getRepository(Category);
  try {
    const categorys = await categoryRepository.findOne({
      where: { CategoryName: request.params.id },
    });
    return response.json({ categorys });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

categoryRouter.put('/:id', async (request, response) => {
  const categoryRepository = getRepository(Category);
  try {
    const category = await categoryRepository.findOne({
      where: { CategoryName: request.params.id },
    });
    if (category) {
      categoryRepository.merge(category, request.body);
      const categoryUpdated = await categoryRepository.save(category);
      return response.json(categoryUpdated);
    }
    return response.json({ message: 'Theres is no matched category' });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

categoryRouter.delete('/:id', async (request, response) => {
  const categoryRepository = getRepository(Category);
  try {
    const category = await categoryRepository.findOne({
      where: { CategoryName: request.params.id },
    });
    if (category) {
      const deletedCategory = await categoryRepository.delete(category.id);
      return response.json(deletedCategory);
    }
    return response.json({ message: 'Theres is no matched category' });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default categoryRouter;

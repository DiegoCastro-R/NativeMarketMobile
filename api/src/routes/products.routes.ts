import { Router } from 'express';

import { getRepository } from 'typeorm';
import CreateProductService from '../services/CreateProductService';
import Product from '../models/products/product.entity';

const productRouter = Router();

productRouter.post('/', async (request, response) => {
  const {
    ProductName,
    ProductDescription,
    Price,
    categoryId,
    ProductImage,
  } = request.body;

  try {
    const createproduct = new CreateProductService();
    const product = await createproduct.execute({
      ProductName,
      ProductDescription,
      Price,
      categoryId,
      ProductImage,
    });
    return response.json(product);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

productRouter.get('/', async (request, response) => {
  const productRepository = getRepository(Product);
  try {
    const products = await productRepository.find();
    return response.json({ products });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

productRouter.get('/:id', async (request, response) => {
  const prodcutRepository = getRepository(Product);
  try {
    const products = await prodcutRepository.findOne({
      where: { ProductName: request.params.id },
    });
    return response.json({ products });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

productRouter.put('/:id', async (request, response) => {
  const prodcutRepository = getRepository(Product);
  try {
    const product = await prodcutRepository.findOne({
      where: { ProductName: request.params.id },
    });
    if (product) {
      prodcutRepository.merge(product, request.body);
      const productUpdated = await prodcutRepository.save(product);
      return response.json(productUpdated);
    }
    return response.json({ message: 'Theres is no matched product' });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

productRouter.delete('/:id', async (request, response) => {
  const prodcutRepository = getRepository(Product);
  try {
    const product = await prodcutRepository.findOne({
      where: { ProductName: request.params.id },
    });
    if (product) {
      const deletedproduct = await prodcutRepository.delete(product.id);
      return response.json(deletedproduct);
    }
    return response.json({ message: 'Theres is no matched product' });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default productRouter;

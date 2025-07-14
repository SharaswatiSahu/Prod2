import { test, expect } from '@playwright/test';
import { AddProduct } from '../pages/addProduct';

test('Add Product', async ({ page }) => {
  const addProductPage = new AddProduct(page);

  await addProductPage.navigateToAddProductPage();

  
  await expect(page).toHaveURL('https://incredible-shortbread-0fe296.netlify.app/');
});
